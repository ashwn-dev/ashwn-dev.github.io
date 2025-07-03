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
            I'm a recent graduate from Reed College with a B.A. in Mathematics with concentration in Statistics. I’m currently exploring opportunities in investment analysis, data science, and strategy.
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
