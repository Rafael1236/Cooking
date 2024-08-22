import React from "react";
import ensalada from "../assets/images/ensalada.png";
import chefs from "../assets/images/chefs.png";
import desayunos from "../assets/images/desayunos.png";
import almuerzos from "../assets/images/almuerzos.jpg";
import cenas from "../assets/images/cenas.jpg";
import postres from "../assets/images/postres.jpg";
import cocinaInternacional from "../assets/images/cocina-internacional.jpg";
import dietasEspeciales from "../assets/images/dietas.jpg";
import recetasFaciles from "../assets/images/recetas-faciles.jpg";
import ocasionesEspeciales from "../assets/images/ocaciones-especiales.jpg";
import recetasSaludables from "../assets/images/recetas-saludables.jpg";
import recetasNinos from "../assets/images/recetas-ninos.jpg";
import chefImage from '../assets/images/chef.png';
import carne from "../assets/images/carne.png"
import "./Home.css";

const Home = () => {
  return (
    <section>
      <div className="bloque1">
        <div className="texto1">
          <h1>
            Prepara las
            <br />
            mejores recetas <br />
            de cocina
          </h1>

          <p>
            Convierte en un maestro en la cocina con nuestras <br />
            diversas recetas para todo tipo de ocasiones.
          </p>

          <button className="boton1">VER RECETAS</button>
        </div>

        <div className="imagen1 rotating-image">
          <img src={ensalada} alt="" />
        </div>
      </div>

      <div className="b2 p-5">
        <div className="imagen1">
          <img src={chefs} alt="" />
        </div>
        <div className="texto1">
          <h1>
            Conoce a los
            <br />
            mejores chefs <br />
            del mundo
          </h1>

          <p>
            En nuestra comunidad contamos con muchos de los mejores
            <br />
            chefs del mundo compartiendo tecnicas y conocimientos.
          </p>

          <button className="boton1">VER CHEFS</button>
        </div>
      </div>

      <section className="p-5 bg-light">
        <div className="container">
          <div className="row text-center text-dark">
            <h1>Nuestros números </h1>
          </div>
          <div className="row text-center p-5">
            <div className="col-md">
              <div className="card mb-3 bg-purple">
                <div className="card-body text-center">
                  <i
                    className="bi bi-journal-medical"
                    style={{ fontSize: "4rem" }}
                  ></i>
                  <h5 className="card-title mt-3 text-white"> RECETAS</h5>
                  <p className="card-text text-white">
                    {" "}
                    Más de 80k recetas disponibles.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card mb-3 bg-purple">
                <div className="card-body text-center">
                  <i
                    className="bi bi-eye text-white"
                    style={{ fontSize: "4rem" }}
                  ></i>
                  <h5 className="card-title mt-3 text-white"> VISITANTES</h5>
                  <p className="card-text text-white">
                    {" "}
                    Más de 65k visistantes mensuales.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card mb-3 bg-purple">
                <div className="card-body text-center">
                  <i
                    className="bi bi-file-person text-white"
                    style={{ fontSize: "4rem" }}
                  ></i>
                  <h5 className="card-title mt-3 text-white"> CHEFS</h5>
                  <p className="card-text text-white">
                    {" "}
                    Más de 20k chefs activos.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card mb-3 bg-purple">
                <div className="card-body text-center">
                  <i
                    className="bi bi-coin text-white"
                    style={{ fontSize: "4rem" }}
                  ></i>
                  <h5 className="card-title mt-3 text-white">
                    {" "}
                    Patrocinadores
                  </h5>
                  <p className="card-text text-white">
                    {" "}
                    Más de 100 patrocinadores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 m-2 bg-dark">
        <div className="container">
          <div className="row text-center text-light">
            {" "}
            <h1>Animate a subir tus recetas y</h1>
          </div>
          <div className="row text-center text-light">
            {" "}
            <h1> convierte en un chef reconocido</h1>
          </div>
          <div className="row text-center text-warning">
            {" "}
            <h1>Subir receta</h1>
          </div>
        </div>
      </section>

      <section>
      <h1 className="textte">Categorias de recetas</h1>
       <div className="bloquerecetas">
        
       <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={desayunos} className="card-img-top" alt="Desayunos" />
              <div className="card-body">
                <h5 className="card-title">Desayunos</h5>
                <p className="card-text">
                  Encuentra recetas rápidas y fáciles para empezar tu día con
                  energía.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={almuerzos} className="card-img-top" alt="Almuerzos" />
              <div className="card-body">
                <h5 className="card-title">Almuerzos</h5>
                <p className="card-text">
                  Ideas deliciosas y variadas para el almuerzo que te mantendrán
                  satisfecho.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={cenas} className="card-img-top" alt="Cenas" />
              <div className="card-body">
                <h5 className="card-title">Cenas</h5>
                <p className="card-text">
                  Recetas perfectas para cerrar el día con una comida deliciosa.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={postres} className="card-img-top" alt="Postres" />
              <div className="card-body">
                <h5 className="card-title">Postres</h5>
                <p className="card-text">
                  Satisface tu antojo dulce con una selección de postres
                  irresistibles.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={cocinaInternacional}
                className="card-img-top"
                alt="Cocina Internacional"
              />
              <div className="card-body">
                <h5 className="card-title">Cocina Internacional</h5>
                <p className="card-text">
                  Explora sabores del mundo con recetas de diferentes países y
                  culturas.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={dietasEspeciales}
                className="card-img-top"
                alt="Dietas Especiales"
              />
              <div className="card-body">
                <h5 className="card-title">Dietas Especiales</h5>
                <p className="card-text">
                  Opciones para dietas veganas, sin gluten, keto, paleo y más.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={recetasFaciles}
                className="card-img-top"
                alt="Recetas Fáciles"
              />
              <div className="card-body">
                <h5 className="card-title">Recetas Fáciles</h5>
                <p className="card-text">
                  Recetas rápidas y sencillas para cuando tienes poco tiempo.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={ocasionesEspeciales}
                className="card-img-top"
                alt="Ocasiones Especiales"
              />
              <div className="card-body">
                <h5 className="card-title">Ocasiones Especiales</h5>
                <p className="card-text">
                  Recetas ideales para celebraciones y momentos especiales.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={recetasSaludables}
                className="card-img-top"
                alt="Recetas Saludables"
              />
              <div className="card-body">
                <h5 className="card-title">Recetas Saludables</h5>
                <p className="card-text">
                  Recetas bajas en calorías, ricas en proteínas y sin azúcar.
                </p>
              </div>
            </div>
          </div>
          
        </div>

       </div>
      </section>

      <section className="my-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img 
              src={chefImage} 
              alt="Gordon Ramsay" 
              className="img-fluid" 
              style={{ maxWidth: '75%', height: 'auto' }} 
            />
          </div>
          <div className="col-md-8">
            <h2 className="mb-3">¡La sopa está tan aguada que el Titanic se hundiría dos veces!</h2>
            <p className="lead">
              Gordon Ramsay, nuestro chef estrella, es conocido por su carácter explosivo y sus comentarios inolvidables. 
              Descubre más sobre él y otros chefs en nuestro equipo.
            </p>
            <a href="#chefs-section" className="btn bg-purple">
              Conoce a nuestros chefs
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="p-5 text-center d-flex justify-content-center">
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active justify-content-center" data-bs-interval="2000">
      <img src={carne} class="d-block w-10" alt="..."/>
    </div>
    <div className="carousel-item justify-content-center" data-bs-interval="2000">
      <img src={carne} class="d-block w-10" alt="..."/>
    </div>
    <div className="carousel-item justify-content-center" data-bs-interval="2000">
      <img src={carne} class="d-block w-10" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden bg-primary">Next</span>
  </button>
</div>
    </section>
    </section>
  );
};

export default Home;
