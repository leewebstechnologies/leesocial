import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>LeeSocial.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            neque eligendi sed minima optio quasi inventore provident similique
            aut cumque? Accusantium magni magnam ex officia quasi repudiandae
            quod pariatur laboriosam.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <Link to="/register">
              <button>Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
