import React, { useRef } from "react";
import "./SigninScreen.css";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signinScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signin}>
          {" "}
          Sign In
        </button>
        <h4 className="signuptext">
          {" "}
          <span className="Signup_gray"> New to Netflix</span>{" "}
          <span className="signup_link" onClick={register}>
            {" "}
            Sign Up Now{" "}
          </span>
        </h4>
      </form>
    </div>
  );
}
export default SignIn;
