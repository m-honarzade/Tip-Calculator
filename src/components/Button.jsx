const Button = ({ bgColor, textColor, onResetHandler, children }) => {
  return (
    <div className="flex flex-row justify-end">
      <button
        type="button"
        onClick={onResetHandler}
        className={`${bgColor} ${textColor} border-[1px]   px-4 py-1 rounded-md w-20 `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
