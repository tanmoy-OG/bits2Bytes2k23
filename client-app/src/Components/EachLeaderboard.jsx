const EachLeaderboard = (props) => {
  let display = [];
  let key = -1;
  props.list.forEach((e, i) => {
    key = key + 1;
    display.push(
      <div className="w-full bg-blue-600/10 hover:bg-blue-500/20 rounded-md user-overview flex flex-row gap-3 p-1 transition-all duration-200" key={key}>
        <div className="w-1/3 sm:w-1/3 text-left tracking-widest p-1 whitespace-nowrap">
          {e[0]}
        </div>
        <div className="w-1/2 sm:w-1/2 text-left tracking-widest p-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {e[1]}
        </div>
      </div>
    );
  });
  return display;
  // return (
  //   <div className="w-full bg-blue-600/10 hover:bg-blue-500/20 rounded-md user-overview flex flex-row gap-3 p-1 transition-all duration-200">
  //     <div className="w-1/2 sm:w-1/3 text-left tracking-widest p-1 whitespace-nowrap">
  //       s
  //     </div>
  //     <div className="w-1/4 sm:w-1/2 text-left tracking-widest p-1 overflow-hidden text-ellipsis whitespace-nowrap">
  //       s
  //     </div>
  //   </div>
  // );
};

export default EachLeaderboard;
