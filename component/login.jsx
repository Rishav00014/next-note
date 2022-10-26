
import React from 'react';
import {signIn} from 'next-auth/react' 


const login = () => {
  return (
    <div className="login">
      <p className="info-center">Please Login With G mail to continue</p>
      <button class="button-33" role="button" onClick={()=> signIn()}>Sign in</button>
    </div>
  )
  
    
}
export default login;