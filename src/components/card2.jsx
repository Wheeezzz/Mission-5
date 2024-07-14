import webLogo from "./images/logo.png";
import googleButton from "./images/google-button.png";
import "../App.css";

function Card2() {
  return (
    <div className="card">
      <img src={webLogo} alt="Web Logo" className="logo" />
      <h1>Daftar</h1>
      <h2>Selamat datang!</h2>
      <table className="input-block">
        <tr>
          <label>Username:</label>
          <input
            type="username"
            name="username"
            id="username"
            placeholder="Masukkan Username"
            className="usernameColumn"
          />
        </tr>
        <tr className="password">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="passwordColumn"
          />
        </tr>
        <tr className="password">
          <label>Konfirmasi Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="passwordColumn"
          />
        </tr>
        <p>
          Sudah punya akun? <a href="../login.html">Masuk</a>
        </p>
        <p></p>
        <button href="">Daftar</button>
        <p>Atau</p>
        <button>
          <img src={googleButton} alt="googleButton" className="googleButton" />
          &nbsp;Daftar dengan Google
        </button>
      </table>
    </div>
  );
}

export default Card2;
