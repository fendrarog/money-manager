import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      PAGE IS NOT FOUND! ERROR 404! Go to <Link to="/">home page.</Link>
    </div>
  );
};

export default NotFoundPage;
