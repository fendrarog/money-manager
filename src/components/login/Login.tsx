import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  from: {
    pathname: string;
  };
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { from } = (location.state as LocationState) || {
    from: {
      pathname: "/",
    },
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    navigate(from.pathname, { replace: true });
    console.log(from);
  };

  return (
    <section className={classNames("page__login", "login")}>
      <div className="login__container">
        <div className="login__body">
          <h2 className="login__title">WELCOME</h2>
          <form
            onSubmit={handleSubmit}
            className={classNames("login__form", "form-login")}
          >
            <label className="form-login__item">
              <div className="form-login__title"> Username</div>
              <input className="form-login__input" type="text" />
            </label>
            <label className="form-login__item">
              <div className="form-login__title">Password</div>
              <input className="form-login__input" type="text" />
            </label>
            <input className="form-login__button" type="submit" value="LOGIN" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
