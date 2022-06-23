import React from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";


export default function register() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/reg.css" type="text/css" />
      </Head>
      <form action="/">
      <>
        <NavBar />
        
        <div class="container">
          <h1>REGISTER!</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>
          <label for="name"><b>Name</b></label>
          <input type="text" placeholder="Enter Full name" name="myname" id="name" required/>

          <div>
          <label for="mob"><b>Mobile Number</b></label>
          <input type="text" placeholder="Enter mob number" name="mobile" id="mob" required/>
        
          <label for="height"><b>Height</b></label>
          <input type="text" placeholder="Enter Height" name="high" id="height" required/>

          <label for="age"><b>Age</b></label>
          <input type="text" placeholder="Enter Age" name="Age" id="age" required/>

          <label for="weight"><b>Weight</b></label>
          <input type="text" placeholder="Enter weight" name="weigh" id="weight" required/>
          </div>
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required/>
          
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
          <hr/>



          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

          <button type="submit" class="registerbtn">Register</button>
        </div>
        
        <div class="container signin">
          <p>Already have an account? <a href="#">Sign in</a>.</p>
        </div>
      </>
</form>

    </>
  );
}
