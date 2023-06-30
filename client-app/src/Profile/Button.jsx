export const Button = (props) => {
  return props.buttontype !== "cancel" ? (
    <div
      onClick={() => {
        props.function(props.buttontype);
      }}
      className="button"
    >
      {props.buttontype}
    </div>
  ) : (
    <div
      onClick={() => {
        props.function(props.buttontype);
      }}
      className="button-red"
    >
      {props.buttontype}
    </div>
  );
};
