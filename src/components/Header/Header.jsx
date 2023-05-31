import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <button className="btn btn-outline-success">Open modal</button>
      </div>
    </nav>
  );
};

export default Header;
