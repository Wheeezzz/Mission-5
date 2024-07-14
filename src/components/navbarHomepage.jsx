import webLogo from "./images/logo.png";
import profileLogo from "./images/avatar.png";
import "../Homepage.css";

function NavbarHomepage() {
  return (
    <div>
      <img src={webLogo} alt="Web Logo" className="navbarLogo" />
      <nav>
        <ul>
          <li>Series</li>
          <li>Film</li>
          <li>Daftar Saya</li>
        </ul>
      </nav>
      <img src={profileLogo} alt="profile" className="profileLogo"/>
    </div>
  );
}

export default NavbarHomepage;
