import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Online Store</h1>
          <p>Mission, Vission & Values</p>
        </div>
      </div>

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={(isActive: boolean) =>
                    "nav-link" + (!isActive ? " active" : "")
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/products"
                  className={(isActive: boolean) =>
                    "nav-link" + (!isActive ? " active" : "")
                  }
                  aria-current="page"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/deals"
                  className={(isActive: boolean) =>
                    "nav-link" + (!isActive ? " active" : "")
                  }
                  aria-current="page"
                >
                  Deals
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/stores"
                  className={(isActive: boolean) =>
                    "nav-link" + (!isActive ? " active" : "")
                  }
                  aria-current="page"
                >
                  Stores
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={(isActive: boolean) =>
                    "nav-link" + (!isActive ? " active" : "")
                  }
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/account"
                  className={(isActive: boolean) =>
                    "nav-link" + (!isActive ? " active" : "")
                  }
                  aria-current="page"
                >
                  <i className="bi bi-person-fill"></i> Your Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className={(isActive: boolean) =>
                    "nav-link" + (!isActive ? " active" : "")
                  }
                  aria-current="page"
                >
                  <i className="bi bi-cart-fill"></i> Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
