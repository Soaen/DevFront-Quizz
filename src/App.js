import './App.css';
import Acceuil from './Pages/Acceuil';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Categorie from './Pages/Categorie';
import Inscription from './Pages/Inscription';
import Sports from './Pages/Sports';
import Sciences from './Pages/Sciences';
import Histoire from './Pages/Histoire';
import Litterature from './Pages/Litterature';
import StartQuizz from './Components/StartQuizz';
import Quizz from './Components/Quizz';
import Profil from './Pages/Profil';
import Connexion from './Pages/Connexion';

function App() {
  return (
    <div>
<Router>
<Link to="./" className='homeIcon'><i className='fa-solid fa-house-chimney'></i></Link>
    <Routes>
      <Route path='/' element={<Acceuil/>}/>
      <Route path='/categorie' element={<Categorie/>}/>
      <Route path='/inscription' element={<Inscription/>}/>
      <Route path='/Sports' element={<Sports/>}/>
      <Route path='/Sciences' element={<Sciences/>}/>
      <Route path='/Histoire' element={<Histoire/>}/>
      <Route path='/Litterature' element={<Litterature/>}/>
      <Route path='/Components/StartQuizz' element={<StartQuizz/>}/>
      <Route path='/Components/Quizz' element={<Quizz/>}/>
      <Route path='/Profil' element={<Profil/>}/>
      <Route path='/Connexion' element={<Connexion/>}/>
    </Routes>
</Router>
  </div>
  );
}

export default App;
