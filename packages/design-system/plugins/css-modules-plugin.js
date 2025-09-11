import { writeFileSync } from 'fs';
import { dirname, basename } from 'path';
import postcss from 'postcss';
import postcssModules from 'postcss-modules';
import * as sass from 'sass';

export function cssModulesPlugin() {
  return {
    name: 'css-modules',
    setup(build) {
      const cssModulesMap = new Map();
      const allCssFiles = [];

      build.onLoad({ filter: /\.module\.scss$/ }, async args => {
        try {
          // Compile SCSS to CSS
          const scssResult = sass.compile(args.path, {
            style: 'expanded',
            sourceMap: false,
          });

          // Process with PostCSS and CSS Modules
          const result = await postcss([
            postcssModules({
              generateScopedName: (name, filename, css) => {
                const componentName = basename(dirname(filename));
                const hash = Buffer.from(css).toString('base64').slice(0, 8);
                return `${componentName}_${name}_${hash}`;
              },
              getJSON: (cssFileName, json) => {
                cssModulesMap.set(args.path, json);
              },
            }),
          ]).process(scssResult.css, {
            from: args.path,
            to: args.path.replace('.scss', '.css'),
          });

          allCssFiles.push({
            path: args.path,
            content: result.css,
          });

          // Return the CSS modules mapping as JS
          const json = cssModulesMap.get(args.path) || {};
          const jsContent = `export default ${JSON.stringify(json, null, 2)};`;

          return {
            contents: jsContent,
            resolveDir: dirname(args.path),
          };
        } catch (error) {
          console.error(`Error processing ${args.path}:`, error);
          return {
            contents: 'export default {};',
            resolveDir: dirname(args.path),
          };
        }
      });

      build.onEnd(async () => {
        try {
          // Read tokens and globals CSS files
          const fs = await import('fs');
          const path = await import('path');

          const tokensPath = path.join(process.cwd(), 'src', 'tokens.css');
          const globalsPath = path.join(process.cwd(), 'src', 'globals.css');

          let tokensCss = '';
          let globalsCss = '';

          try {
            tokensCss = fs.readFileSync(tokensPath, 'utf8');
          } catch (error) {
            console.warn('⚠️  Could not read tokens.css:', error.message);
          }

          try {
            globalsCss = fs.readFileSync(globalsPath, 'utf8');
          } catch (error) {
            console.warn('⚠️  Could not read globals.css:', error.message);
          }

          // Combine all CSS
          const cssParts = [];

          if (tokensCss) {
            cssParts.push(`/* Design System Tokens */\n${tokensCss}`);
          }

          if (globalsCss) {
            cssParts.push(`/* Global styles reset and base */\n${globalsCss}`);
          }

          if (allCssFiles.length > 0) {
            const consolidatedCss = allCssFiles
              .map(file => `/* ${file.path} */\n${file.content}`)
              .join('\n\n');
            cssParts.push(consolidatedCss);
          }

          const finalCss = cssParts.join('\n\n');
          writeFileSync('dist/styles.css', finalCss);
          console.log('✅ Consolidated CSS file generated: dist/styles.css');
        } catch (error) {
          console.error('❌ Error generating consolidated CSS:', error);
          // Create empty file as fallback
          writeFileSync('dist/styles.css', '');
          console.log('✅ Empty CSS file created as fallback: dist/styles.css');
        }
      });
    },
  };
}
