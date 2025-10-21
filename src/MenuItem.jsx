import { Link } from "react-router-dom";
const MenuItem = ({ name, icon, para, href }) => {
  return (
    <Link className="flex items-center gap-2" href={href}>
      {icon}
      <div className="flex gap-15">
        <h3>{name}</h3>
        <p
          className={`font-extrabold text-lg ${
            para === "15+" ? "text-red-500" : ""
          }`}
        >
          {para}
        </p>
      </div>
    </Link>
  );
};

export default MenuItem;
