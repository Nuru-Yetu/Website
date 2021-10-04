
function App() {
  return (
    <div>
       <section id="header">
          <div className="header container">
            <div className="nav-bar">
              <div className="brand">
                <a href="#hero">
                  <h1><span>N</span>uru <span>Y</span>etu</h1>
                </a>
              </div>
              <div className="nav-list">
                <div className="hamburger">
                  <div className="bar"></div>
                </div>
                <ul>
                  <li><a href="#hero" data-after="Home">Home</a></li>
                  <li><a href="#services" data-after="Service">Services</a></li>
                  <li><a href="#about" data-after="About">About</a></li>
                  <li><a href="#contact" data-after="Contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
       </section>

        <section id="hero">
          <div className="hero container">
            <div>
              <h1>Sustainable Energy Solutions for refugees in Africa <span></span></h1>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="services container">
            <div className="service-top">
              <h1 className="section-title">Serv<span>i</span>ces</h1>
              <p>Some text</p>
            </div>
            <div className="service-bottom">
              <div className="service-item">
                <div className="icon">
                  <img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="icon"/>
                </div>
                <h2>Web Design</h2>
                <p>Some text</p>
              </div>
              <div className="service-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="icon"/></div>
                <h2>Web Design</h2>
                <p>Some text</p>
              </div>
              <div className="service-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="icon"/></div>
                <h2>Web Design</h2>
                <p>Some text</p>
              </div>
              <div className="service-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="icon"/></div>
                <h2>Web Design</h2>
                <p>Some text</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="about container">
            <div className="col-left">
              <div className="about-img">
                <img src="./img/BidiBidi1.jpg" alt="img"/>
              </div>
            </div>
              <div className="col-right">
                <h1 className="section-title">About <span>US</span></h1>
                <h2>Solar based sustainable solutions</h2>
                <p>Team Nuru Yetu has a wide range of expertise, such as electrical engineering, computer and data science, artificial intelligence, cultural studies and project management.We are a multicultural team, with well established cross-cultural communication skills. Also we speak 8 languages</p>
              </div>
            </div>
        </section>

        <section id="contact">
          <div className="contact container">
            <div>
              <h1 className="section-title">Contact <span>info</span></h1>
            </div>
            <div className="contact-items">
              <div className="contact-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="icon"/></div>
                <div className="contact-info">
                  <h1>Phone</h1>
                  <h2>+1 234 123 1234</h2>
                  <h2>+1 234 123 1234</h2>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="icon"/></div>
                <div className="contact-info">
                  <h1>Email</h1>
                  <h2>Nuru.yetu2021@gmail.com</h2>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="icon"/></div>
                <div className="contact-info">
                  <h1>Address</h1>
                  <h2>Kampala, Uganda</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

         <section id="footer">
            <div class="footer container">
              <div class="brand">
                <h1><span>N</span>uru <span>Y</span>etu</h1>
              </div>
              <h2>Your sustainable energy solution in refugee settlements</h2>
              <div class="social-icon">
                <div class="social-item">
                  <a href="https://nuru-yetu.netlify.app"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" alt="icon"/></a>
                </div>
                <div class="social-item">
                  <a href="https://nuru-yetu.netlify.app"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="icon"/></a>
                </div>
                <div class="social-item">
                  <a href="https://nuru-yetu.netlify.app"><img src="https://img.icons8.com/bubbles/100/000000/twitter.png" alt="icon"/></a>
                </div>
                <div class="social-item">
                  <a href="https://www.linkedin.com/company/76513061"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="icon"/></a>
                </div>
              </div>
              <p>Copyright © 2021 Nuru Yetu. All rights reserved</p>
            </div>
          </section>
    </div>
  );
}

export default App;
