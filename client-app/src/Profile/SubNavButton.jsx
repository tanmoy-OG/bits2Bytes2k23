const SubNavButton = (props) => {

  const navActivator=(val)=>{
    if(val === "details") props.setActive(true);
    else props.setActive(false);
  }

  return (
    <div className={props.class} onClick={() => {navActivator(props.buttonType)}}>{props.buttonType}</div>
  );
};

export default SubNavButton;
