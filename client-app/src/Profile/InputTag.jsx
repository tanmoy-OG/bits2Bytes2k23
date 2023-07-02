export const InputTag = (props) => {
  return (
    <div className="flex flex-row justify-between items-start gap-8">
      <h1 className="text-left text-sm md:text-lg font-bold tracking-wider text-white font-custom-sans w-32 uppercase pt-1 md:pt-0">
        {props.heading}
      </h1>

      <div className="flex-col justify-center items-center w-60">
        <input
          type="text"
          className={props.inputclass}
          value={props.data}
          onChange={(e) => {
            props.changeVal(e.target.value);
          }}
        />
        {props.errshow && (
          <li className="text-sm text-red-500 list-none flex justify-start flex-wrap tracking-wide text-left">
            {props.errmsg}
          </li>
        )}
      </div>
    </div>
  );
};
