// app.js (type="text/babel")

const { useEffect } = React;

function App() {
  return (
    <div>
      <header data-aos="fade-down">
        <h1><i className="fas fa-user"></i> Ashwin Dev</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#blog">Blog</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <main>
        <section id="about" data-aos="fade-up">
          <h2>About Me</h2>
          <p>
  Welcome to my personal website! My name is Ashwin, and I recently graduated with a B.A. in Mathematics with a Concentration in Statistics from Reed College in Portland, Oregon. During my final year at Reed, I completed a senior thesis titled "Dynamic Volatility in Financial Markets: An Evaluation of the Generalized Autoregressive Conditional Heteroskedastic (GARCH) Model." I currently work as a Performance Analyst at Callan in the Portland office.
          </p>
          <p>
  I enjoy working on projects that deal with time series analysis, data visualization, and statistical modeling. I have the most experience with R; however, I am also proficient in Python and SQL. Additionally, I have worked on various projects where I’ve used Microsoft Excel and the Bloomberg Terminal for investment research and analysis.
          </p>
          <p>
  In my free time, I enjoy playing and watching tennis, running, playing The New York Times games, and reading.          
          </p>
          <p>
  Here is a <a href="resume.pdf" download>link to my resume</a> if you’d like to read more about my work experience.
          </p>
        </section>
      
        <section id="blog" data-aos="fade-up">
          <h2>Blog</h2>
          <p>Coming soon!</p>
        </section>

        <section id="projects" data-aos="fade-up">
          <h2>Projects</h2>
          <p>Coming soon!</p>
        </section>

        <section id="contact" data-aos="fade-up">
          <h2>Contact</h2>
          <div className="contact-icons">
  {/* Email */}
  <a href="mailto:adev2883@gmail.com" aria-label="Email">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 4H22V20H2V4Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M22 4L12 13L2 4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  </a>
  {/* LinkedIn */}
<a
  href="https://www.linkedin.com/in/ashwin-dev-/"
  target="_blank"
  rel="noopener"
  aria-label="LinkedIn"
>
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="32"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.349V9h3.414v1.561h.049c.476-.9 1.637-1.846 3.368-1.846 3.601 0 4.267 2.372 4.267 5.456v6.281zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07 0-1.145.926-2.07 2.07-2.07s2.07.925 2.07 2.07c0 1.144-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.728v20.543C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.728C24 .771 23.2 0 22.225 0z"/>
  </svg>
</a>
  {/* GitHub */}
  <a href="https://github.com/ashwn-dev" target="_blank" rel="noopener" aria-label="GitHub">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.49 20.14 9.49 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.8 5.03 16.5 5.03 16.5C4.11 15.88 5.1 15.89 5.1 15.89C6.11 15.95 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.62 17.11 9.89 16.68 10.19 16.44C7.54 16.18 4.78 15.17 4.78 10.85C4.78 9.63 5.21 8.64 5.9 7.88C5.79 7.65 5.42 6.57 5.99 5.05C5.99 5.05 6.84 4.78 9.5 6.39C10.29 6.17 11.14 6.05 12 6.05C12.86 6.05 13.71 6.17 14.5 6.39C17.16 4.78 18.01 5.05 18.01 5.05C18.58 6.57 18.21 7.65 18.1 7.88C18.79 8.64 19.22 9.63 19.22 10.85C19.22 15.18 16.45 16.18 13.8 16.44C14.18 16.78 14.52 17.36 14.52 18.28C14.52 19.59 14.5 20.65 14.5 21C14.5 21.27 14.66 21.59 15.16 21.5C19.13 20.17 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
    </svg>
  </a>
</div>
        </section>

      </main>

      <footer>
        © {new Date().getFullYear()} Ashwin Dev
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
