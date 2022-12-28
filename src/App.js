import './App.css';
import bris from './assets/bris.png'
import feli from './assets/feli.png'
import quac from './assets/quac.jpg'
import React from 'react'
import ReactPlayer from 'react-player'


function App() {
  return (
    <div className="App">
      <div className='grid '>

        <div className="App-text presentacion ">
          Hola, esta es una historia que se ira contando con el tiempo del año, esta pagina no se acabara hoy,
          se acabara hasta el siguiente año, exactamente en tu proximo cumpleaños, este sera un diario en el cual hablare de ti,
          no cada día, pero si los dias más importantes para mi, este será mi manera de expresar todo lo que siento por ti, y el como me siento,
          esto es publico btw, yo soy el que escribe pero tu siempre podras ver todo lo que escribo, si es que me lograste encontrar vea, ya que todo sera como un jueguito.
        </div>
        <div className="App-text presentacion dos">
          Feliz cumpleaños a la personita más preciosa del universo entero,
          esto lo estoy escribiendo literalmente a las 12:07 am del 28 de 2022,
          esta pagina la estaba programando desde antes de que me dijeras que
          si podiamos jugar pero pues ya me entretuve jugando vea jaja,
          asi que esto es lo que tengo escrito hasta apenas,
          ahorita veo como hacer todo esto bonito, solo te comunico como lo ando haciendo jsjs.
        </div>

        <div className="App-text presentacion tres">
          Te quiero desear lo mejor de la vida amor mio, tratare de mejorar
          como persona para que tu te sientas feliz en cada momento que estes conmigo, enserio te amo ♥.
          espero tengas una hermosa vida, como la hermosa persona que eres para mi, espero que con el pasar del tiempo te ames más y más hasta poder ser una persona feliz
          , enserio te amo demasiado amor mio, creo yo que no existen las palabras como para describir todo lo que siento por ti
          , quisiera estar contigo toda mi vida para poder mejorar y siguiendole echando ganas a la vida, porque eres mi motivo de seguir adelante
        </div>
      </div>
      <div className="linea"></div>
      <div className='container'>
        <div className='grid gridImg'>
          <img src={feli} alt="bris" className='img img1' />;
          <img src={quac} alt="bris" className='img img2' />;
        </div>
        <div className='grid2 '>
          <img src={bris} alt="bris" className='img img3' />;
        </div>
      </div>

      <div className="linea"></div>

      <div className='a'>
      <div className='videoContainer'>
        <ReactPlayer 
        className='video'
        controls
        playing
        url='https://youtu.be/RXpe-kbDJE8' />
      </div>

      <div className='App-text inicio'>Así empezo todo, con la programación y una canción que me pego en el mejor momento</div>
      <div className='App-text inicio'>Ahora bien, por donde empezamos? Hay que empezar en un nuevo día, porque hoy solo se festeja el nacimiento de la niña inocente jaja</div>

      </div>
    </div>
  );
}

export default App;
