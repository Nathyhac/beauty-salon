import { ChevronLeft, ChevronRight } from "lucide-react"
import "./HomePage.css"
import Carousel from "../Carousal/Carousal.jsx"

const HomePage = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Book in style</h2>
          <p>Simple • Immediate • 24/7</p>

          <div className="search-box">
            <div className="search-inputs">
              <div className="input-group">
                <label>What are you looking for?</label>
                <input type="text" placeholder="Name of the salon, services (cut, etc.)" />
              </div>
              <div className="input-group">
                <label>Or</label>
                <input type="text" placeholder="Address, city..." />
              </div>
            </div>
            <button className="btn-dark">To research</button>
          </div>
        </div>
      </section>
      
      {/* End of carousal Section */}
      < Carousel/>

      {/* Growth Section */}
      <section className="section">
        <div className="section-tag">STRONG GROWTH</div>
        <h2 className="section-title">
          Are you a beauty professional?
          <br />
          Discover online appointment booking!
        </h2>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>+ 50%</h3>
            <p>frequency of appointments made online</p>
          </div>
          <div className="stat-card">
            <h3>4x</h3>
            <p>fewer forgetfulness with SMS appointment reminders</p>
          </div>
          <div className="stat-card">
            <h3>50%</h3>
            <p>online appointments made outside of opening hours</p>
          </div>
          <div className="stat-card">
            <h3>+50,000</h3>
            <p>Salons & institutes</p>
          </div>
          <div className="stat-card">
            <h3>5 appointments</h3>
            <p>Taken every second</p>
          </div>
          <div className="stat-card">
            <h3>&gt; 5 billion €</h3>
            <p>Appointments sold</p>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="section dark">
        <div className="section-tag">PRESS</div>
        <h2 className="section-title">They talk about us</h2>
        <div className="press-logos">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vogue_logo.svg/1200px-Vogue_logo.svg.png"
            alt="Vogue"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Grazia_Logo.svg/2560px-Grazia_Logo.svg.png"
            alt="Grazia"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Elle_Logo.svg/2560px-Elle_Logo.svg.png"
            alt="Elle"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Marie_Claire_Logo.svg/2560px-Marie_Claire_Logo.svg.png"
            alt="Marie Claire"
          />
        </div>
      </section>

      {/* Professionals Carousel */}
      <section className="section flex">
        <div className="image-container">
          <img
            src="https://images.unsplash.com/photo-1585314062604-1a357de8b000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            alt="Professional tools"
          />
        </div>
        <div className="text-container">
          <h2 className="section-title">Discover our Professionals</h2>
          <div className="category">
            <h3>Hairdresser</h3>
            <p>Looking for a new look or simply a fresh new look? Need expert advice to enhance your style?</p>
            <a href="#" className="link">
              See more
            </a>
          </div>
          <div className="carousel-nav">
            <button>
              <ChevronLeft size={20} />
            </button>
            <button>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Professional Recruitment */}
      <section className="section light">
        <div className="section-tag">PROFESSIONAL</div>
        <h2 className="section-title">Planity is looking for profiles throughout</h2>
      </section>
    </div>
  )
}

export default HomePage
