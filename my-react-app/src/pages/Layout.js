import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/login">Login</a>
                            <a className="nav-link" href="/contact">Contact</a>
                            <a className="nav-link" href="/students">Students Table</a>
                            {/* <a className="nav-link" href="/add_students">Add Student</a> */}
                            <a className="nav-link" href="/test">Test</a>
                        
                        </div>
                    </div>
                </div>
            </nav>
      <Outlet />
    </>
  )
};

export default Layout;