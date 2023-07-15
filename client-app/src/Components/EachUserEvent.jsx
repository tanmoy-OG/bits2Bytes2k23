import { useState } from "react";
import Button from "./Button";
import Field from "./Field";

const EachUserEvent = (props) => {
  const [visible, setVisible] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const deleteActivator = (val) => {
    if (val === "delete user") setVisible(false);
    else if (val === "cancel") setVisible(true);
    else {
      // api call
      setVisible(true);
    }
  };

  return (
    <div className="w-full bg-blue-600/10 hover:bg-blue-500/20 rounded-md flex flex-col transition-all duration-200">
      {/* user overview */}
      <div
        className="user-overview flex flex-row gap-3 p-1"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        <div className="w-1/2 sm:w-1/3 text-left tracking-widest p-1 whitespace-nowrap">
          {props.ename}
        </div>
        <div className="w-1/4 sm:w-1/3 text-left tracking-widest p-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {props.tname}
        </div>
        <div className="w-1/4 sm:w-1/3 text-right tracking-widest p-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {props.no}
        </div>
      </div>
      {showDetails && <Members list={props.list} />}
    </div>
  );
};

const Members = (props) => {
  const display = [];
  props.list.forEach((e) => {
    display.push(<Field header="roll number" data={e} />);
  });
  return <div className="flex flex-col items-center">{display}</div>;
};

export default EachUserEvent;
