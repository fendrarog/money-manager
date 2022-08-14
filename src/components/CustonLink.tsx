import classNames from "classnames";
import { Link, useMatch } from "react-router-dom";

interface CustomLinkType {
  children: string;
  to: string;
  props?: { [x: string]: string };
}

const CustomLink: React.FC<CustomLinkType> = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      className={classNames("menu__link", { active: match })}
      {...props}
    >{children}</Link>
  );
};

export default CustomLink;
