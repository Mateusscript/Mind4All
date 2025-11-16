import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

export default function App() {

  // Estado do carrossel
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % 4); // 4 imagens
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + 4) % 4);
  };

  return (
    <div className="container">

      <main>
        <nav className="navbar">
          <h1 className="logo">EstudaAí</h1>

          <ul className="menu">
            <li>Cursos</li>
            <li>Sobre</li>
            <li>Contato</li>

            {/* Links de Login e Registro */}
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registro">Registro</Link></li>
          </ul>
        </nav>

        {/* ROTAS */}
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <header className="banner animate-title">
                  <h2>Aprenda Qualquer Coisa</h2>
                  <p>Cursos modernos, gratuitos e fáceis de aprender.</p>
                </header>

                {/* Carrossel de Cursos */}
                <section className="cursos">
                  <h3 className="animate-title">Nossos Cursos</h3>

                  <div className="carousel">

                    <button className="prev" onClick={prevSlide}>&lt;</button>

                    <div
                      className="carousel-track"
                      style={{
                        transform: `translateX(-${index * 100}%)`,
                        transition: "0.5s ease"
                      }}
                    >
                      <img src="/img/curso1.jpg" alt="Curso 1" />

                      <img src="/img/curso2.jpg" alt="Curso 2" />
                      <img src="/img/curso3.jpg" alt="Curso 3" />
                      <img src="/img/curso4.jpg" alt="Curso 4" />
                    </div>

                    <button className="next" onClick={nextSlide}>&gt;</button>
                  </div>
                </section>
              </>
            }
          />

        </Routes>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} EstudaAí — Todos os direitos reservados.
      </footer>

    </div>
  );
}
