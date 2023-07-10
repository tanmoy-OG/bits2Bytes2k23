const Button = (props) => {
  return props.buttonType === "edit" ? (
    <div
      onClick={() => {
        props.function(props.buttonType);
      }}
      className="button"
    >
      {props.buttonType}
    </div>
  ) : props.buttonType === "cancel" ? (
    <div
      onClick={() => {
        props.function(props.buttonType);
      }}
      className="button-red"
    >
      {props.buttonType}
    </div>
  ) : (
    <button type="submit"
      // onClick={() => {
      //   props.function(props.buttonType);
      // }}
      className="button"
    >
      {props.buttonType}
    </button>
  );
};

export default Button;
