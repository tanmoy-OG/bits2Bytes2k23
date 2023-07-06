import { Link } from "react-router-dom";

const MailTo = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <p className="pl-1 text-orange-400">{label}</p>
    </Link>
  );
};

export default MailTo;
