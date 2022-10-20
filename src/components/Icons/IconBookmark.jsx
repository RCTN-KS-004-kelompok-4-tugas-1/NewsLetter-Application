import React from 'react';

const IconSearch = ({ width = 32, height = 32, color = '#000000' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4V26.75L16.9 23.16L16 22.71L15.1 23.16L8 26.75V4H24ZM24 2H8C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4V30L16 25L26 30V4C26 3.46957 25.7893 2.96086 25.4142 2.58579C25.0391 2.21071 24.5304 2 24 2Z"
        fill={color}
      />
    </svg>
  );
};

export default IconSearch;
