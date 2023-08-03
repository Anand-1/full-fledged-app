const Button = ({ onClick, text, customClass }: any) => {
  return (
    <button className={customClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
