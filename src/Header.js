
const Header = () =>{
    return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" href="/">Navbar</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/home.js" >Home</Link> */}
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/contact.js" >Contact Us</Link> */}
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/abouts.js" >About Us</Link> */}
              </li>
              <li className="nav-item dropdown">
                {/* <Link className="nav-link dropdown-toggle text-success" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Project
                </Link> */}
                <ul className="dropdown-menu">
                  {/* <li><Link className="dropdown-item"  to="/todo_list.js">Todo List</Link></li>
                  <li><Link className="dropdown-item" >Another action</Link></li>
                  <li><Link className="dropdown-item" >Something else here</Link></li> */}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <h4>My first React Todo-List App</h4>
            </form>
          </div>
        </div>
      </nav>
    </div>
    )
} 

export default Header;