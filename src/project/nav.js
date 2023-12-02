import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="list-group">
      
      <Link
        to="/project/signin"
        className="list-group-item list-group-item-action"
      >
        SignIn
      </Link>
      <Link
        to="/project/users"
        className="list-group-item list-group-item-action"
      >
        Users
      </Link>
      <Link
        to="/project/account"
        className="list-group-item list-group-item-action"
      >
        Account
      </Link>
      <Link
        to="/project/signup"
        className="list-group-item list-group-item-action"
      >
        Signup
      </Link>

    </div>
  );
}

export default Nav;