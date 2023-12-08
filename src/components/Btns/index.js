const BtnPrimary = ( props ) => {

  return (
    <button 
      {...props} 
      className="text-white font-bold py-2.5 rounded-md w-full bg-primary hover:bg-indigo-600 transition-all"
      type={props.type || 'button'}
    >
      {props.text}
    </button>
  );
}

export default BtnPrimary;