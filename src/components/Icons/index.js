import React from "react";
import IconFacebook from "../Icons/IconFacebook";
import IconGoogle from "../Icons/IconGoogle";

const BtnIcon = ({ icon, text, ...props }) => {
  
  let iconComponent;

  const style = `${(icon) ? 'text-sm' : ''} cursor-pointer flex justify-center items-center border border-gray-400 font-bold py-2.5 rounded-md w-full hover:border-red-600 transition-all` 

  if (icon === "facebook") {
    iconComponent = <IconFacebook className="mr-2" />;
  } else if (icon === "google") {
    iconComponent = <IconGoogle className="mr-2" />;
  } else {
    iconComponent = null;
  }
  
  return (
    <button
      {...props}
      className={style}
    >
      {iconComponent}
      {text.length > 0 ? <div className="w-5/6">{text}</div> : null}
    </button>
  );
};

export default BtnIcon;
