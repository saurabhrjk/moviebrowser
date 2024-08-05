import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ searchText, setSearchText }) => {

  const nagivate = useNavigate();

  const updateSearchText = (e) => {
    nagivate('/search');
    setSearchText(e.target.value)
  }


  return (
    <nav className="navbar navbar-expand bg-body-tertiary rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Movie Browser</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true">Coming soon</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchText}
              onChange={updateSearchText}
            />
            <Link className="btn btn-outline-dark" type="submit" to="/search">Search</Link>

          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;