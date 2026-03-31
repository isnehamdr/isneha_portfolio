import React from 'react';

const VerticalGridLines = ({
  className = '',
  lineClassName = '',
  position = 'absolute',
  variant = 'dark',
}) => {
  const isFixed = position === 'fixed';
  const style =
    variant === 'light'
      ? { '--grid-line-color': 'rgba(240,237,232,0.08)' }
      : undefined;

  return (
    <div
      className={`${isFixed ? 'fixed' : 'absolute'} inset-0 pointer-events-none grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 ${className}`}
      style={style}
    >
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`grid-line h-full ${i >= 4 ? 'hidden sm:block' : ''} ${i >= 6 ? 'hidden lg:block' : ''} ${lineClassName}`}
        />
      ))}
    </div>
  );
};

export default VerticalGridLines;
