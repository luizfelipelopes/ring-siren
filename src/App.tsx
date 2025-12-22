import { useRef, useState } from 'react'
import sirenSound from './assets/sirene-passa-ou-repassa.mp3';
import sirenGif from './assets/siren.gif';
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false);
  const [alertTime, setAlertTime] = useState('');
  const audioSiren = useRef(new Audio(sirenSound));

  const currentTime = () => {
    const now = new Date();

    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    const ml = String(now.getMilliseconds()).padStart(3, '0');

    const stringTime = `${hh}:${mm}:${ss}:${ml}`;

    setAlertTime(stringTime);
  }


  const playSiren = () => {

    const audio = audioSiren.current;

    if (isActive) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
      audio.loop = true;
      currentTime();
    }

    setIsActive(!isActive);

  }

  return (
    <>
      <div className='siren-container'>
        <a onClick={playSiren} href="#">
          {!isActive
            ? <div className='siren-stopped'>🚨</div>
            : <img src={sirenGif} className="logo react siren-playing" alt="React logo" />}
        </a>
      </div>
      <h1>Clique na Sirene</h1>

      {alertTime &&
        <div className="card">
          <button>
            Ok loco bicho! Exatamente às: <strong>{alertTime}</strong>
          </button>
        </div>
      }

    </>
  )
}

export default App
