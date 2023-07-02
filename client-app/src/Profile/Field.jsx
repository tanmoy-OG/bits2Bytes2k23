const Field = (props) => {
  return (
    <div className="flex flex-row gap-4 justify-between flex-wrap md:flex-nowrap p-2 mt-1 mb-1 bg-white/10 w-full">
      <div className="text-sm overflow-wrap break-word tracking-widest font-bold uppercase whitespace-nowrap">{props.header}</div>
      <div className="text-sm overflow-wrap break-word tracking-widest">{props.data}</div>
    </div>
  );
};

export default Field;
