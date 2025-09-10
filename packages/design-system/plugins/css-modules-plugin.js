import { writeFileSync, mkdirSync } from 'fs';
import { dirname, basename } from 'path';
import sass from 'sass';
import postcss from 'postcss';
import postcssModules from 'postcss-modules';

export function cssModulesPlugin() {
  return {
    name: 'css-modules',
    setup(build) {
      const cssModulesMap = new Map();

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

          // Write CSS file to dist
          const cssFileName = args.path
            .replace('src/', 'dist/')
            .replace('.scss', '.css');
          const cssDir = dirname(cssFileName);
          mkdirSync(cssDir, { recursive: true });
          writeFileSync(cssFileName, result.css);

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
    },
  };
}
