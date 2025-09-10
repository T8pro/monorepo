'use client';

import { useTargetCursor } from './hooks';
import './styles.scss';
import { TargetCursorProps } from './types';

export const TargetCursor = (props: TargetCursorProps) => {
  const { cursorRef, dotRef } = useTargetCursor(props);

  return (
    <div ref={cursorRef} className='targetCursorWrapper'>
      <div ref={dotRef} className='targetCursorDot' />
      <div
        className='targetCursorCorner cornerTl'
        data-selector='targetCursorCorner'
      />
      <div
        className='targetCursorCorner cornerTr'
        data-selector='targetCursorCorner'
      />
      <div
        className='targetCursorCorner cornerBr'
        data-selector='targetCursorCorner'
      />
      <div
        className='targetCursorCorner cornerBl'
        data-selector='targetCursorCorner'
      />
    </div>
  );
};
