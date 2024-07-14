import webLogo from "./images/logo.png";
import googleButton from "./images/google-button.png";
import "../App.css";

function Card() {
  return (
    <div className="card">
      <img src={webLogo} alt="Web Logo" className="logo" />
      <h1>Masuk</h1>
      <h2>Selamat datang kembali!</h2>
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
        <p>
          Belum punya akun? <a href="../register.html">Daftar</a>
        </p>
        <a href="">Lupa kata sandi?</a>
        <p></p>
        <a href="../homepage.html"><button>Masuk</button></a>
        <p>Atau</p>
        <button>
          <img src={googleButton} alt="googleButton" className="googleButton" />
          &nbsp;Masuk dengan Google
        </button>
      </table>
    </div>
  );
}

export default Card;
