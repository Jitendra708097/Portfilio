// pages/About.js

const About = () => {
  // Sample quotes data
  const quotes = [
    "बहुत कम लोग जानते हैं कि वे बहुत कम जानते हैं- हजारी प्रसाद द्विवेदी.",
    "Education is not the preparation for life; education is life itself. - John Dewey", 
  ];

  return (
    <div className="about-page" 
         style={{backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1950')`}}>
      
      <div className="about-content">
        <div className="profile-section">
          <div className="profile-photo">
            <img className='photo-placeholder' src="https://3.bp.blogspot.com/-b7u_A49fXQQ/Vv_XcgChcJI/AAAAAAAATGU/gwdSP2rk88sCzr1rIJeyLs76-w0iFqRBw/s1600/Aishwarya-Rai-Bachchan_beautiful-actresses-in-world.jpg" alt="Profile" />
          </div>
          <div className="profile-info">
            <h1>About Me</h1>
            <p>
              I'm Jitendra Kumar, an undergraduate student in Computer Science and Engineering fueled by a genuine thrill for learning and exploring the unknown. I deeply value self-introspection, using it to guide my growth and understanding.
            </p>
            <p>
              My core drive is to apply my developing technical skills to tackle meaningful, real-world problems and contribute to the public good. I observe a common path where CSE graduates become proficient users of tools (tool drivers), rather than the creators of novel solutions (tool creators). While I'm actively building my foundational expertise, my clear aspiration is to transcend this pattern. I am committed to evolving into an innovator and creator, dedicated to developing impactful technology that addresses genuine needs.
            </p>
          </div>
        </div>
        
        <div className="quotes-section">
          <h2>Inspirational Quotes</h2>
          <div className="quotes-container">
            {quotes.map((quote, index) => (
              <blockquote key={index} className="quote-card">
                {quote}
              </blockquote>
            ))}
          </div>
        </div>
      </div>
      
      <footer className="footer">
        © {new Date().getFullYear()} Jitendra Kumar Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default About;