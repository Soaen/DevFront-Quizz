import React, { useState, useEffect } from "react";
import "./style/Account.css";
import axios from "axios";

export default function Account() {
  const [userDatas, setUserDatas] = useState([]);
  const [userID, setUserID] = useState(1);
  const [formData, setFormData] = useState({
    id: userID,
    name: "",
    email: "",
    passwordField: "",
    newEmail: "",
    newPasswordField: "",
    confirmNewPasswordField: "",
  });

  const passwordRegex = /^(?=.*\d)(?=.*[\W_])[a-zA-Z0-9\W_]{5,}$/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    const userId = localStorage.getItem("userID");
    if (userId) {
      setUserID(userId);
    }
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        const datas = response.data;
        setUserDatas(datas);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function updateUserEmail(event) {
    event.preventDefault();
    const updatedData = {
      email: formData.newEmail,
    };
    updateUserDatas(updatedData, userID);
  }

  function updateUserPassword(event) {
    event.preventDefault();
    if (formData.newPasswordField !== formData.confirmNewPasswordField) {
      alert("Les deux mots de passe ne correspondent pas");
      return;
    }
    if (!passwordRegex.test(formData.newPasswordField)) {
      alert(
        "Le nouveau mot de passe doit contenir au moins un chiffre, un caractère spécial et avoir une longueur d'au moins 6 caractères"
      );
      return;
    }
    const updatedData = {
      password: formData.newPasswordField,
    };
    updateUserDatas(updatedData, userID);
  }

  function updateUserDatas(updatedData, id) {
    console.log(updatedData);
    console.log(formData);
    axios
      .put(`http://localhost:8000/api/users/${id}`, updatedData)
      .then((response) => {
        console.log(updatedData);
        console.log(response.data);
        alert("Vos informations ont été mises à jour");
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Une erreur est survenue lors de la mise à jour de vos informations"
        );
      });
  }

  // const currentUserData = userDatas.findIndex(x => x.id == userID)
  let userdata;
  userDatas.map((item) => {
    if(item.id == userID){
userdata = item
    }
  })

  return (
    <div>
      {Object.keys(userDatas).length > 0 ? (
        <div>
          <div className="container-profil">
            <p>Bonjour, {userdata.name}</p>
            <p>{userdata.email}</p>
            <p>
              Mail vérifié :{" "}
              {userdata.email_verified_at === null ||
              userdata.email_verified_at === false
                ? "Non"
                : "Oui"}
            </p>
          </div>
          <form
            className="changement-email"
            method="post"
            onSubmit={updateUserEmail}
          >
            <div className="container-changement">
              <div className="changement-type">
                <label htmlFor="changemail">Nouvelle adresse e-mail</label>
                <input
                  type="email"
                  id="changemail"
                  className="changement-input"
                  placeholder="votre@nouvelle-email.com"
                  name="newEmail"
                  value={formData.newEmail}
                  onChange={handleInputChange}
                />
                <input
                  type="submit"
                  value={"Enregistrer"}
                  className="changement-submit boutonEnv"
                />
              </div>
            </div>
          </form>
          <form
            className="changement-pswd"
            method="post"
            onSubmit={updateUserPassword}
          >
            <div className="container-changement">
              <div className="changement-type">
                <label htmlFor="changepswd">Nouveau mot de passe</label>
                <input
                  type="password"
                  id="changepswd"
                  className="changement-input"
                  placeholder="Nouveau mot de passe"
                  name="newPasswordField"
                  value={formData.newPasswordField}
                  onChange={handleInputChange}
                />
              </div>
              <div className="changement-type">
                <label htmlFor="confirmpassword">
                  Confirmez le nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  className="changement-input"
                  placeholder="Confirmez le nouveau mot de passe"
                  name="confirmNewPasswordField"
                  value={formData.confirmNewPasswordField}
                  onChange={handleInputChange}
                />
                <input
                  type="submit"
                  value={"Enregistrer"}
                  className="changement-submit boutonEnv"
                />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
