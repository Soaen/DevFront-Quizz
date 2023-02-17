import React, { useState } from "react";
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

function Profil() {
  const [modalOpen, setModalOpen] = useState(false);

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
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        
      >
        <div className="modal">
            <h2>Dernieres sessions : </h2>
            
            <div className="score">
            <h3>08/02/2023 :</h3>
            <h4>categorie Sport</h4>
            <p>8 points</p>
            </div>
            <div className="score">
            <h3>07/02/2023 :</h3>
            <h4>categorie Histoire/Geo</h4>
            <p>5 points</p>
            </div>
            <div>
            <h3>06/02/2023 :</h3>
            <h4>categorie Litterature</h4>
            <p>7 points</p>
            </div>

        </div>
<div className="centre">
        <a className="retour" onClick={() => setModalOpen(false)}>Retour</a></div>
      </Modal>
    </div>
    </div>
  );
}

export default Profil;