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
        </nav>
      </header>

      <main>
        <section id="about" data-aos="fade-up">
          <h2>About Me</h2>
          <p>
            Welcome to my personal website! My name is Ashwin and I recently graudated with a B.A. in Mathematics with Concentration in Statistics from Reed College in Portland, Oregon. During my final year at Reed, I completed a senior thesis titled "Dynamic Volatility in Financial Markets: An Evaluation of the Generalized Autoregressive Conditional Hetereskedastic (GARCH) Model". I am currently looking for full-time opportunities in investment analysis, data science, and strategy.
          </p>
          <p>
            I enjoy working on projects that deal with time series analysis, data visualization, and statistical modeling. I have the most experience with R, however I am also proficient in Python and SQL. Additionally, I have worked on various projects where I've used Microsoft Excel and Bloomberg Terminal for investment research and analysis.
          </p>
        </section>

        <section id="contact" data-aos="fade-up">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:adev2883@gmail.com">adev2883@gmail.com</a></p>
        </section>
      </main>

      <footer>
        © {new Date().getFullYear()} Ashwin Dev
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
