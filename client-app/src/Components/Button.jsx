const Button = (props) => {
  return props.buttonType === "edit" ? (
    <div
      onClick={() => {
        props.function(props.buttonType);
      }}
      className="button text-xs sm:text-sm"
    >
      {props.buttonType}
    </div>
  ) : props.buttonType === "cancel" ? (
    <div
      type="button"
      onClick={() => {
        props.function(props.buttonType);
      }}
      className="button-red text-xs sm:text-sm"
    >
      {props.buttonType}
    </div>
  ) : props.buttonType === "delete user" ? (
    <button
      type="button"
      onClick={() => {
        props.function(props.buttonType);
      }}
      className="button text-xs sm:text-sm"
    >
      {props.buttonType}
    </button>
  ) : props.buttonType === "confirm delete" ? (
    <button
      type="button"
      onClick={() => {
        props.function(props.buttonType);
      }}
      className="button text-xs sm:text-sm"
    >
      {props.buttonType}
    </button>
  ) : (
    <button type="submit" className="button text-xs sm:text-sm">
      {props.buttonType}
    </button>
  );
};

export default Button;
