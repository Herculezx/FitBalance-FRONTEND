import React from 'react'

const ButtonReUse = ({ link , nameBtn }) => {
  return (
    <a href={link} className="bg-3d py-2 w-1/3 mx-1 font-bold border-2 border-borda hover:bg-borda hover:border-hover hover:w-2/5 duration-300 rounded-lg shadow-lg flex justify-center items-center gap-2 text-md text-white">
      <i className="bi bi-box-arrow-left text-white"></i> {nameBtn}
    </a>
  );
};

export default ButtonReUse