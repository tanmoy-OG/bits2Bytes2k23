export const InputTag = (props) => {

  return (
    <div className="flex flex-col justify-start gap-2">
      <h1 className="text-sm md:text-lg font-bold tracking-wider text-neutral-200 font-custom-sans w-fit pl-1 uppercase">
        {props.heading}
      </h1>

      <input type="text" className={props.inputclass} value={props.data} onChange={(e)=>{props.changeVal(e.target.value)}} />
      {props.errshow && <li className="text-red-500 list-none flex justify-start flex-wrap tracking-wide">{props.errmsg}</li>}
    </div>
  );
};

