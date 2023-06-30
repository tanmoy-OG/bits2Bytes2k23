export const Button = (props) => {
  return (props.buttontype !== "cancel") ? (
    <button
      onClick={() => {
        props.function(props.buttontype);
      }}
      className="w-60 h-fit m-2 mb-3 pl-4 pr-4 pt-2 pb-2 text-lg md:text-xl font-bold tracking-wider text-neutral-200 font-custom-sans uppercase border border-spacing-1 border-white hover:shadow-white hover:shadow-[0_0px_8px_rgba(0,0,0,0.5)] transition-all duration-300"
    >
      {props.buttontype}
    </button>
  ) : (
    <button
      onClick={() => {
        props.function(props.buttontype);
      }}
      className="w-60 h-fit m-2 mb-3 pl-4 pr-4 pt-2 pb-2 text-lg md:text-xl font-bold tracking-wider text-red-500 font-custom-sans uppercase border border-spacing-1 border-red-500 hover:shadow-red-500 hover:shadow-[0_0px_8px_rgba(0,0,0,0.5)] transition-all duration-300"
    >
      {props.buttontype}
    </button>
  );
};
