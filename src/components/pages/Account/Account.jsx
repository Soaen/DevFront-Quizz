import React from 'react'
import './style/Account.css'

export default function Account() {
  return (

    <div className='container-changement'>
      <div className='changement-type'>
        <label htmlFor='changemail'>E-Mail</label>
        <input type="mail" id='changemail' className='changement-input' placeholder='votre@email.com'/>
      </div>
      <div className='changement-pswd'>
        <div className='changement-type'>
          <label htmlFor='changepswd'>Nouveau Mot de Passe</label>
          <input type="password" id='changepswd' className='changement-input' placeholder='nouveau Mot de Passe'/>
        </div>
      <div className='changement-type'>
        <label htmlFor='confirmpassword'>Confirmez le mot de passe</label>
        <input type="mail" id='confirmpassword' className='changement-input' placeholder='Confirmation nouveau Mot e Passe'/>
      </div>
      </div>
      
      <input type="submit" value={'Confirmer'} className='changement-submit boutonEnv'/>
    </div>
  )
}
