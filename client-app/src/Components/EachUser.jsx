import { useState } from "react";
import Button from "./Button";
import Field from "./Field";

const EachUser = (props) => {
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
    <div className="w-full bg-blue-600/10 rounded-md flex flex-col transition-all duration-200">
      {/* user overview */}
      <div
        className="user-overview flex flex-row gap-3 p-1"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        <div className="w-1/2 sm:w-1/3 text-left tracking-widest p-1 whitespace-nowrap">
          {props.roll}
        </div>
        <div className="w-1/4 sm:w-1/3 text-left tracking-widest p-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {props.fname}
        </div>
        <div className="w-1/4 sm:w-1/3 text-left tracking-widest p-1 overflow-hidden text-ellipsis whitespace-nowrap">
          {props.lname}
        </div>
      </div>

      {/* user details */}
      {showDetails && (
        <div className="flex flex-col items-center">
          <Field header="first name" data={props.fname} />
          <Field header="last name" data={props.lname} />
          <Field header="roll number" data={props.roll} />
          <Field header="year" data={props.year} />
          <Field header="stream" data={props.stream} />
          <Field header="email" data={props.email} />
          <Field header="phone number" data={props.phno} />

          {(props.deleted === "false") &&(<div className="flex justify-center p-6 w-2/3">
            {visible && (
              <Button function={deleteActivator} buttonType="delete user" />
            )}
            {!visible && (
              <div className="w-full flex flex-wrap justify-center gap-x-20 gap-y-5">
                <Button function={deleteActivator} buttonType="confirm" />
                <Button function={deleteActivator} buttonType="cancel" />
              </div>
            )}
          </div>)}
        </div>
      )}
    </div>
  );
};

export default EachUser;
