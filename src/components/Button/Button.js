const Button = (props) => {
  const { text, color, type, handleOnClick } = props;

  const style = { backgroundColor: color };

  return (
    <button type={type} style={style} onClick={handleOnClick}>
      {text ? text : 'add button text please'}
    </button>
  );
};

export default Button;
