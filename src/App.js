import './App.css';
import { Link } from 'react-router-dom'
import background from './assets/img/fondo-PI.jpg'
import imagenLanding from './assets/img/cute-little-dog-impersonating-business-person.jpg'
import video from './assets/Cachorro - 4740.mp4'

function App() {
  return (
    <Link to='/home'>
    <div className="App" >
       
    <img className='img_mar' src={imagenLanding} alt='DogMar'/>
      
      <Link to='/home' className='title'>Henry dogs</Link><span className='cursor'>|</span>
      
    
    </div>
    </Link>
  );
}

export default App;
//  <Link className='link__home'to='/home'>Home</Link> 