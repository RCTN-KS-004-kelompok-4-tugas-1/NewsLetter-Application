import React from 'react';

const IconSearch = ({ width = 20, height = 28, color = '#000000' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V28L10 22.946L20 28V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z"
        fill="#010101"
      />
    </svg>
  );
};

export default IconSearch;
