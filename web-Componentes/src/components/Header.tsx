import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Quest</h1>
      <nav className="nav">
        <a href="#">Inicio</a>
        <a href="#">Acerca</a>
        <a href="#">Paginas</a>
        <a href="#">Blog</a>
      </nav>
    </header>
  );
};

export default Header;
