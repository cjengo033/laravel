import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            <a class="nav-link" href="/blogs">Blogs</a>
                            <a class="nav-link" href="/contact">Contact</a>
                            <a class="nav-link" href="/students">Students</a>
                        
                        </div>
                    </div>
                </div>
            </nav>
      <Outlet />
    </>
  )
};

export default Layout;