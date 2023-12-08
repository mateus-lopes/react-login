import React from "react";

const BtnIcon = ({ text, ...props }) => {

  const style = `cursor-pointer flex justify-center items-center border border-gray-400 font-bold py-2.5 rounded-md w-full hover:border-red-500 transition-all` 

  return (
    <button
      {...props}
      className={style}
    >
      {text}
    </button>
  );
};

export default BtnIcon;
