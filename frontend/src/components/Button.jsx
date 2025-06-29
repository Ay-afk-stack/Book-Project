const Button = ({ buttonName }) => {
  return (
    <button className="p-2 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-2xl font-medium px-3 hover:opacity-80 hover:duration-300 hover:cursor-pointer ">
      {buttonName}
    </button>
  );
};

export default Button;
