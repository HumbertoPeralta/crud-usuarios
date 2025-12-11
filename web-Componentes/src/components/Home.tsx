import './Home.css';

function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <h2>
          Haz crecer tus habilidades,<br />define tu futuro
        </h2>
        <p>
          Presentamos Quest, la escuela tecnológica del futuro. 
          Te enseñamos las habilidades necesarias para prepararte para el futuro.
        </p>
        <div className="buttons">
          <button className="btn-primary">EXPLORA CURSOS</button>
          <button className="btn-secondary">APRENDE MÁS</button>
        </div>
      </div>

      <div className="home-image">
        <img 
          src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />
      </div>
    </section>
  );
};

export default Home;
