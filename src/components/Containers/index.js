
const Container = ({ children }) => {
  return (
    <div className="bg-white w-screen h-screen lg:flex">
        {children}
    </div>
  );
}

export default Container;