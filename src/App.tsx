import { BestSeller } from 'utils/data';
import Card from 'components/Card';
import Footer from 'components/Footer';

import Leaf from 'assets/img/leaf.png';
import Plant from 'assets/img/plant.png';
import Fish from 'assets/img/fish.png';
import Mashroom from 'assets/img/mashroom.png';
import Pepper from 'assets/img/pepper.png';
import Tomato from 'assets/img/tomato.png';
import PizzaPlat from 'assets/img/about-pizza-1.png';
import PizzaTaker from 'assets/img/about-pizza-2.png';

import './App.css';

function App() {
  return (
    <>
      <header className="bg-hero">
        <h1>La P<span className="yellow-color">i</span><span className="red-color">z</span><span className="green-color">z</span>a</h1>
      </header>

      <main>

        <img src={Plant} className="plant" alt="Plant" />
        <img src={Leaf} className="leaf" alt="Leaf" />
        <img src={Fish} className="fish" alt="Fish" />
        <img src={Mashroom} className="mashroom" alt="Mashroom" />
        <img src={Pepper} className="pepper" alt="Pepper" />
        <img src={Tomato} className="tomato" alt="Tomato" />

        <div className="container">
          <h2>Mais vendidas</h2>

          <div className="best-seller">

            {
              BestSeller.map(pizza => (
                <div key={pizza.id}>
                  <Card
                    name={pizza.name}
                    description={pizza.description}
                    img={pizza.img}
                    price={pizza.price}
                  />
                </div>
              ))
            }

          </div>
        </div>
      </main>

      <section className="about">
        <div className="container">
          <div className="about-image-container">
            <div className="about-pizza-image">
              <img src={PizzaPlat} alt="Pizza Plat" />
            </div>

          </div>

          <div className="about-info">
            <h2>Sobre a La P<span className="yellow-color">i</span><span className="red-color">z</span><span className="green-color">z</span>a</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis justo sem. Donec consequat, nunc a dapibus dapibus, justo dolor
              tristique tortor, sit amet tincidunt lorem nisl at ex. Cras dolor purus, varius in euismod pretium, finibus nec mi. Curabitur aliquam
              pharetra lectus in pharetra. Nullam viverra elementum neque quis fermentum.
            </p>
            <button className="btn read-more-btn">Leia mais</button>
          </div>
        </div>

        <div className="about-pizza-taker-image">
          <img src={PizzaTaker} alt="Pizza Taker" />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
