import '../styles/tailored.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

function TailoredSection() {
  return (
    <section className="tailored">
      <div className="tailored-container">
        {/* Left Content */}
        <div className="tailored-text">
          <h2>A Tailored Kiosk Solution for Your Business</h2>
          <p className="subtitle">
            TapGo provides a tailored solution to suit the unique needs of any business.
          </p>

          <div className="feature">
            <span className="feature-icon">🧭</span>
            <div>
              <h4>Seamless Ordering Experience</h4>
              <p>
                With over three years of refinement, our intuitive ordering system ensures a seamless, distraction-free experience with clear, step-by-step guidance for every customer.
              </p>
            </div>
          </div>

          <div className="feature">
            <span className="feature-icon">💳</span>
            <div>
              <h4>Hassle-Free Payment Options</h4>
              <p>
                Our integrated payment terminal allows customers to pay effortlessly using their card, smartphone (Apple Pay/Google Pay), or Payconiq. Eliminate cash handling and minimize staff interaction.
              </p>
            </div>
          </div>

          <div className="feature">
            <span className="feature-icon">🎨</span>
            <div>
              <h4>Fully Customizable</h4>
              <p>
                We customize your kiosk to match your brand's identity perfectly, ensuring seamless integration. From exterior design to user interface, we handle every detail.
              </p>
            </div>
          </div>
        </div>

        {/* Right Images Grid */}
        <div className="tailored-images">
          <img src={img1} alt="Kiosk 1" />
          <img src={img2} alt="Kiosk 2" />
          <img src={img3} alt="Kiosk 3" />
          <img src={img4} alt="Kiosk 4" />
        </div>
      </div>
    </section>
  );
}

export default TailoredSection;
