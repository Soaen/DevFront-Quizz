import './App.css';
import Acceuil from './components/pages/Home/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Categorie from './components/pages/Categories/Categories';
import Inscription from './components/pages/Create/Create';
import StartQuizz from './components/pages/Quiz/StartQuiz';
import Quizz from './components/pages/Quiz/Quiz';
import Profil from './components/pages/User/User';
import Connexion from './components/pages/Connexion/Connexion';
import Compte from './components/pages/Account/Account';

function App() {
  return (
    <div>
<Router>
<Link to="./" className='homeIcon'><i className='fa-solid fa-house-chimney'></i></Link>
    <Routes>
      <Route path='/' element={<Acceuil/>}/>
      <Route path='/categorie' element={<Categorie/>}/>
      <Route path='/inscription' element={<Inscription/>}/>
      <Route path='/startquizz/:id' element={<StartQuizz/>}/>
      <Route path='/quiz/:id' element={<Quizz/>}/>
      <Route path='/profil' element={<Profil/>}/>
      <Route path='/connexion' element={<Connexion/>}/>
      <Route path='/compte' element={<Compte/>}/>
    </Routes>
</Router>
  </div>
  );
}

export default App;
