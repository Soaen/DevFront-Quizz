import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import './style/User.css';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 400,
  },
};
const apiURL = 'http://127.0.0.1:8000/api/parties'

function Profil() {
  const [modalOpen, setModalOpen] = useState(false);
  const [datas, setDatas] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const storage = window.localStorage;



  useEffect(() => {
    fetch(apiURL)
    .then (response => response.json())
    .then(data => {
      data.forEach(e => {
        const tempData = data.filter(e => e.id % 2 === 1 && e.idjoueur === parseInt(storage.getItem('userID')));
        setDatas(tempData)
        setLoading(false)
      });
    })
  }, [])

  const datas1 = datas[0]
  const datas2 = datas[1]
  const datas3 = datas[2]


  if (isLoading) {
    return (
      <div className="loading-div">
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_ht6o1bdu.json" background="transparent" speed="1" loop autoplay></lottie-player>
        <div id='generated'><p>Loading...</p></div>
      </div>
    );
  }

  function noDatas(){
    return(
      <div className="score">
              <h3>Aucune données disponible</h3>
              {/* <h4>Catégories</h4> */}
              <p>0 points</p>
              </div>
    )
  }
  return (
    <div className="Profil">
        <h1 className="titreCompte">Gestion du compte</h1>
        <div>
        <div className="titreProfil">
        <Link to = '/Compte'  className="compteModif">Modifier mes informations</Link>
             
      <a className="modalBouton" onClick={setModalOpen}>Consulter mon historique</a>
      </div>
      <Modal
        closeTimeoutMS={500}
        isOpen={modalOpen ? true : false}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        ariaHideApp={false}
        
      >

        <div className="modal">
            <h2>Dernieres sessions : </h2>
            {typeof datas1 !== 'undefined' ? 
            <div className="score">
            <h3>{new Date(datas1.created_at).toLocaleDateString('fr-FR')}</h3>
            {/* <h4>Catégorie</h4> */}
            <p>{datas1.score} points</p>
            </div>
          :
          noDatas()  
          }
            {typeof datas2 !== 'undefined' ? 
              <div className="score">
            <h3>{new Date(datas2.created_at).toLocaleDateString('fr-FR')} :</h3>
            {/* <h4>categorie Histoire/Geo</h4> */}
            <p>{datas2.score} points</p>
            </div>
            :
              noDatas()
            }
            {typeof datas3 !== 'undefined' ? 
            <div>
            <h3>{new Date(datas3.created_at).toLocaleDateString('fr-FR')} :</h3>
            {/* <h4>categorie Litterature</h4> */}
            <p>{datas3.score} points</p>
            </div>
            :
              noDatas()
            }
        </div>
<div className="centre">
        <a className="retour" onClick={() => setModalOpen(false)}>Retour</a></div>
      </Modal>
    </div>
    </div>
  );
}

export default Profil;