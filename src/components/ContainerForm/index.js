const Form = ({ children }) => {
  return (
    <div 
      className="flex justify-center items-center py-16 lg:py-0 w-full lg:h-screen"
    >
      <main className="bg-white flex flex-col gap-8 w-8/12">
        {children}
      </main>
    </div>
  );
}

export default Form;