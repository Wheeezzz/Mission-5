/* eslint-disable react/no-unescaped-entities */
import cardTonton1 from "./images/card-tonton1.png";
import cardTonton2 from "./images/card-tonton2.png";
import cardTonton3 from "./images/card-tonton3.png";
import cardTonton4 from "./images/card-tonton4.png";
import "../Homepage.css";

function HomepageSection() {
  return (
    <>
      <h1>Melanjutkan Tonton Film</h1>
      <ul className="homepageSection">
        <li><img src={cardTonton1} alt="card1" /><div className="lip1">Don't Look Up</div></li>
        <li><img src={cardTonton2} alt="card2" /><div className="lip2">The Batman</div></li>
        <li><img src={cardTonton3} alt="card3" /><div className="lip3">Blue Lock</div></li>
        <li><img src={cardTonton4} alt="card4" /><div className="lip4">A Man Called Otto</div></li>
      </ul>
    </>
  );
}

export default HomepageSection;
