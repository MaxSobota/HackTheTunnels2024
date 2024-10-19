import "./Banner.style.scss";

function Banner() { // Edited banner image for challenge 3
  return (
    <div className="Banner">
      <img src="/nerd.png" alt="nerd" />
      <div className="Banner__seperator"></div>
      <div className="Banner__title">Carleton's Least User Friendly Site</div>
    </div>
  );
}

export default Banner;
