import React from "react";
import "./style.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="body">
      <header>
        <div className="logo"></div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Giveaways</a>
            </li>
          </ul>
        </nav>
        <div className="image">
          <div className="name">
            <a href="#" className="participate">
              Participate
            </a>
          </div>
          <div className="mango4">
            <img src="/images/images__3_-removebg-preview.png" />
          </div>
          <div className="hero-image">
            <img src="images/mango.png" alt="Mango Drink" />
          </div>
          <div className="slice">
            <img src="/images/images__3_-removebg-preview.png" alt="Mango" />
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h3>
            <b>Love Mangoes?</b>-&nbsp;Taste The
            <br />
            Tropical Magic That Will Leave You Craving For More!
          </h3>
          <p>
            An incredible fusion of sun-ripened mangoes and pure refreshment.
          </p>
          <div className="parti">
            <button className="participate-btn" onClick={scrollToTop}>
              Participate
            </button>
          </div>
          <div className="explori">
            <button className="explore-btn" onClick={scrollToTop}>
              Explore Giveaways
            </button>
          </div>
        </div>
      </section>

      <div className="img">
        <img src="/images/download-removebg-preview.png" alt="Mango Slice" />
      </div>
      <section className="how-to-participate">
        <h2>
          <b>How To</b> Participate?
        </h2>
        <p>
          Enter our exciting giveaway for a chance to win big! Join the fun and
          participate in our
          <br />
          amazing contest today. Don't miss out on this golden opporunity!
        </p>
        <div className="flower">
          <img src="images/images-removebg-preview.png" />
        </div>
        <div className="steps">
          <div className="step">
            <img src="images/Login Information.png" alt="Step 1" />
            <div className="top">
              <b>1</b>
            </div>
            <p>
              Sign up and follow
              <br /> your code and dice
            </p>
          </div>
          <div className="step">
            <img src="images/lucky_draw-removebg-preview.png" alt="Step 2" />
            <div className="top">
              <b>2</b>
            </div>
            <p>
              Buy a can and participate
              <br /> in the draw
            </p>
          </div>
          <div className="step">
            <img
              src="images/lotto-lottery-raffle-draw-09-512.webp"
              alt="Step 3"
            />
            <div className="top">
              <b>3</b>
            </div>
            <p>
              Win exciting prizes
              <br /> worth millions
            </p>
          </div>
        </div>
        <div className="slice2">
          <img src="images/download-removebg-preview.png" alt="Mango Slice" />
        </div>
        <div className="logo2"></div>
        <div className="img2">
          <img
            src="images/images__3_-removebg-preview.png"
            alt="CMango Cutting"
          />
        </div>
        <div className="flower1">
          <img src="images/images__1_-removebg-preview.png" alt="Flower" />
        </div>
      </section>

      <section className="cta">
        <div className="dice">
          <img src="images/dice.png" alt="Dice" />
        </div>
        <div className="bila">
          <h2>"Ready To Win Big?</h2>
          <p>
            Take part in our exclusive giveaway and you could be walking
            <br /> away with incredible prizes. Don't miss your shot –
            participate
            <br /> now and let the excitement begin!"
          </p>
          <a href="#" className="luck" onClick={scrollToTop}>
            Try Your Luck
          </a>
          <div className="flower2">
            <img src="images/images__1_-removebg-preview.png" alt="Flowers" />
          </div>
        </div>
      </section>

      <section className="last">
        <div className="color">
          <div className="para">
            <p>
              Signup and get all the latest offers, discounts
              <br /> and free giveaways right at your inbox
            </p>
          </div>
          <div className="signup">
            <button className="signup-btn" onClick={scrollToTop}>
              Signup
            </button>
          </div>
        </div>
        <div className="mango3">
          <img src="images/images__3_-removebg-preview.png" alt="Mango" />
        </div>
      </section>

      <footer>
        <div className="border1">
          <p>All Rights Reserved</p>
        </div>
        <div className="border2">
          <p>@2021 NVF Drinks</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

