const Button = (props) => {
  return props.buttonType !== "cancel" ? (
    <div
      onClick={() => {
        props.function(props.buttonType);
      }}
      className="button"
    >
      {props.buttonType}
    </div>
  ) : (
    <div
      onClick={() => {
        props.function(props.buttonType);
      }}
      className="button-red"
    >
      {props.buttonType}
    </div>
  );
};

export default Button;