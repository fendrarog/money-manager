import classNames from "classnames";

const Login: React.FC = () => {
  return (
    <section className={classNames("page__login", "login")}>
      <div className="login__container">
        <div className="login__body">
          <h2 className="login__title">WELCOME</h2>
          <form className={classNames("login__form", "form-login")}>
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
