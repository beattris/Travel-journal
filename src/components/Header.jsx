import moon from "../assets/moon.png";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <img src={moon} alt="logo" className="logo" />
        <p>my travel journal.</p>
      </nav>
    </header>
  );
};

export default Header;
