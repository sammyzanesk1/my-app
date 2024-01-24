import logo from "./assets/react.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={logo} className="nav-logo" />
        <p className="nav-title">
          <strong>ReactFacts</strong>
        </p>
        <h4 className="nav-project">
          <strong>React Course - Project 1</strong>
        </h4>
      </nav>
    </header>
  );
}
