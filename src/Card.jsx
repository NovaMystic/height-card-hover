import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";

export default function Card() {
  return (
    <div className="container">
      <div className="card" style={{ "--clr": "#009688" }}>
        <div className="image-box">
          <img src={img1} alt="" />
        </div>
        <div className="contect">
          <h2>Istanbul</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            aliquid dolores! Quod corporis qui tempore! Deserunt, consequuntur?
            Ratione, natus ea?
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="card" style={{ "--clr": "#eba5ea" }}>
        <div className="image-box">
          <img src={img2} alt="" />
        </div>
        <div className="contect">
          <h2>Netherlands</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            aliquid dolores! Quod corporis qui tempore! Deserunt, consequuntur?
            Ratione, natus ea?
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
      <div className="card" style={{ "--clr": "#03a9f4" }}>
        <div className="image-box">
          <img src={img3} alt="" />
        </div>
        <div className="contect">
          <h2>Switzerland</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            aliquid dolores! Quod corporis qui tempore! Deserunt, consequuntur?
            Ratione, natus ea?
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
}
