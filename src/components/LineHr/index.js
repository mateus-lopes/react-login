const LineHr = ({text}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full border-t border-gray-300"></div>
      <div className="mx-4 font-medium text-sm uppercase">{text}</div>
      <div className="w-full border-t border-gray-300"></div>
    </div>
  );
}

export default LineHr;