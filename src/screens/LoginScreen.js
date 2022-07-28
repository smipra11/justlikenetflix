import React, { useState } from "react";
import "./LoginScreen.css";
import SignIn from "./SigninScreen";

function LoginScreen() {
  const [signin, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="loginScreen_button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login_gradient" />
      </div>
      <div className="login__body">
        
        {signin ? (<SignIn/>) :(
            <>
            <h1>Unlimeted films,TV programs and more.</h1>
            <h2>Watch anywhere. cancel lt any time.</h2>
            <h3>
              {" "}
              Ready to watch? Enter your email to create or to restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="input" placeholder="Email Address" />
                <button onClick={()=>setSignIn(true)} className="loginScreen__getstarted">GET STARTED</button>
              </form>
            </div>
            </>

        )}
          
        
      </div>
     
    </div>
  );
}
export default LoginScreen;
