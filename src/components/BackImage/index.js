import React from 'react';
import backgroundImage from './background-login.png';

const BackImage = (props) => {
  const { full, className, children, ...restProps } = props;

  const image = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: full ? 'contain' : 'cover',
    backgroundPosition: 'top left',
    with: full ?'100%' : '',
    height: full ? '100%' : '',
  };

  const combinedClassName = `w-full h-40 md:h-72 lg:h-screen ${className}`;

  return (
    <div {...restProps} style={image} className={combinedClassName}>
      {children}
    </div>
  );
}

export default BackImage;
