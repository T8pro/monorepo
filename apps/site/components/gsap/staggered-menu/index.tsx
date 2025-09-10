'use client';

import { menuItems, socialItems as socialItemsConstants } from './constants';
import './styles.scss';
import { useStaggeredMenu } from './hooks';
import { StaggeredMenuProps } from './types';

export const StaggeredMenu = ({
  position = 'right',
  colors = ['#181914', '#679a58'],
  items = menuItems,
  socialItems = socialItemsConstants,
  displaySocials = true,
  displayItemNumbering = true,
  className,
  menuButtonColor = '#fff',
  openMenuButtonColor = '#fff',
  changeMenuColorOnOpen = true,
  accentColor = '#679a58',
  handleOpenAction = () => {},
  handleCloseAction = () => {},
}: StaggeredMenuProps) => {
  const {
    open,
    panelRef,
    preLayersRef,
    toggleMenu,
    textLines,
    textWrapRef,
    textInnerRef,
    plusHRef,
    plusVRef,
    iconRef,
    toggleBtnRef,
  } = useStaggeredMenu({
    position,
    colors,
    items,
    socialItems,
    displaySocials,
    menuButtonColor,
    openMenuButtonColor,
    changeMenuColorOnOpen,
    handleOpenAction,
    handleCloseAction,
  });

  return (
    <div
      className={(className ? className + ' ' : '') + 'staggered-menu-wrapper'}
      style={
        accentColor ? { ['--sm-accent' as string]: accentColor } : undefined
      }
      data-position={position}
      data-open={open || undefined}
    >
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {(() => {
          const raw =
            colors && colors.length
              ? colors.slice(0, 4)
              : ['#1e1e22', '#35353c'];
          const arr = [...raw];
          if (arr.length >= 3) {
            const mid = Math.floor(arr.length / 2);
            arr.splice(mid, 1);
          }
          return arr.map((c, i) => (
            <div key={i} className="sm-prelayer" style={{ background: c }} />
          ));
        })()}
      </div>
      <header
        className="staggered-menu-header"
        aria-label="Main navigation header"
      >
        <button
          ref={toggleBtnRef}
          className={`sm-toggle ${open ? 'open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span
            ref={textWrapRef}
            className="sm-toggle-textWrap"
            aria-hidden="true"
          >
            <span ref={textInnerRef} className="sm-toggle-textInner">
              {textLines.map((l, i) => (
                <span className="sm-toggle-line" key={i}>
                  {l}
                </span>
              ))}
            </span>
          </span>
          <span ref={iconRef} className="sm-icon" aria-hidden="true">
            <span ref={plusHRef} className="sm-icon-line" />
            <span ref={plusVRef} className="sm-icon-line sm-icon-line-v" />
          </span>
        </button>
      </header>

      <aside
        id="staggered-menu-panel"
        ref={panelRef}
        className="staggered-menu-panel"
        aria-hidden={!open}
      >
        <div className="sm-panel-inner">
          <ul
            className="sm-panel-list"
            role="list"
            data-numbering={displayItemNumbering || undefined}
          >
            {items && items.length ? (
              items.map((it, idx) => (
                <li className="sm-panel-itemWrap" key={it.label + idx}>
                  <a
                    className="sm-panel-item"
                    href={it.link}
                    aria-label={it.ariaLabel}
                    data-index={idx + 1}
                  >
                    <span className="sm-panel-itemLabel">{it.label}</span>
                  </a>
                </li>
              ))
            ) : (
              <li className="sm-panel-itemWrap" aria-hidden="true">
                <span className="sm-panel-item">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}
          </ul>
          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="sm-socials" aria-label="Social links">
              <h3 className="sm-socials-title">Socials</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sm-socials-link"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};
