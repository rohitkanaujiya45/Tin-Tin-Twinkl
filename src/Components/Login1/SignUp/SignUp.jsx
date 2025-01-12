// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useRef } from "react";
// // import { signupUserData } from "../../../redux/actions/userAction";
// import { registeruser } from "../../../reduxstore/action";
// // import { useDispatch } from "react-redux";
// function SignUp() {
//   // const [firstName, setFirstName] = useState("");
//   // const [lastName, setLastName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   // dispatch(signupUserData(firstName, lastName, email, password));
//   //   setFirstName("");
//   //   setLastName("");
//   //   setEmail("");
//   //   setPassword("");
//   //   setTimeout(() => {
//   //     navigate("/");
//   //   }, 1000);
//   // };
//   let FirstNameRef = useRef();
//   let LastNameRef = useRef();
//   let Emailref = useRef();
//   let Passsword = useRef();
//   let currentuserdata = useSelector((myStore)=>{return myStore.registeredUsers});
  
//  const handleRegister = (e)=>{
  
//   e.preventDefault();
//   let userDetails = {
//     firstName : FirstNameRef.current.value,
//     lastName : LastNameRef.current.value,
//     email : Emailref.current.value,
//     password : Passsword.current.value,
//   }
//   let userAlready_present = false;
//   currentuserdata.forEach((elem)=>{
//     if(elem.email === userDetails.email){
//       userAlready_present = true;
//     }
//   })
//   if(!userAlready_present){
//     registeruser(userDetails,dispatch);
//     alert("Registered successfully")
//     setTimeout(()=>{
//       navigate("/login")
//     },2000)
//   }else{
//     alert("user already exist");
//   }
  

//   console.log(userDetails)
//  }

//   return (
//     <div
//       style={{ backgroundColor: "#fff", minHeight: "90vh", marginTop: "-24px" }}
//     >
//       <div className="comm-header">
//         <img
//           src="https://btechmart.com/assets/images/logo001.png"
//           alt="Logo"
//           className="img__logo"
//           onClick={() => {
//             navigate("/");
//           }}
//         />

//         <section className="login__section">
//           <div className="login__div">
//             <p className=" login__heading">Register</p>
//             <form >
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 ref={FirstNameRef}
//                 // onChange={(e) => setFirstName(e.target.value)}
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 ref={LastNameRef}
//                 // value={lastName}
//                 // onChange={(e) => setLastName(e.target.value)}
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 ref={Emailref}
//                 // value={email}
//                 // onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 ref={Passsword}
//                 // value={password}
//                 // onChange={(e) => setPassword(e.target.value)}
//               />
//               <div>
//                 <button type="submit" onClick={handleRegister}>Register</button>
//               </div>
//               <div className="l__fot dis-flex">
//                 <div>If you already have an account, please</div>
//                 <div
//                   className="navig__signup"
//                   onClick={() => {
//                     navigate("/login");
//                   }}
//                 >
//                   Login
//                 </div>
//               </div>
//             </form>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default SignUp;
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registeruser } from "../../../reduxstore/action";
import "./SignUp.css";

function SignUp() {
  const FirstNameRef = useRef();
  const LastNameRef = useRef();
  const EmailRef = useRef();
  const PasswordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUserData = useSelector((state) => state.registeredUsers);

  const handleRegister = (e) => {
    e.preventDefault();
    const userDetails = {
      firstName: FirstNameRef.current.value,
      lastName: LastNameRef.current.value,
      email: EmailRef.current.value,
      password: PasswordRef.current.value,
    };

    const userAlreadyExists = currentUserData.some(
      (user) => user.email === userDetails.email
    );

    if (userAlreadyExists) {
      alert("User already exists!");
    } else {
      registeruser(userDetails, dispatch);
      alert("Registered successfully!");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="form-section">
          <img
            src="https://btechmart.com/assets/images/logo001.png"
            alt="Logo"
            className="img__logo"
            onClick={() => navigate("/")}
          />
          <h2 className="signup__heading">Register</h2>
          <form onSubmit={handleRegister}>
            <input type="text" placeholder="First Name" ref={FirstNameRef} />
            <input type="text" placeholder="Last Name" ref={LastNameRef} />
            <input type="email" placeholder="Email" ref={EmailRef} />
            <input type="password" placeholder="Password" ref={PasswordRef} />
            <button type="submit">Register</button>
          </form>
          <div className="l__fot">
            <span>If you already have an account, please</span>
            <span
              className="navig__signup"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </div>
        </div>
        <div className="image-section">
          <img
            src="https://img.freepik.com/premium-vector/shopping-spree-people-carrying-bags-pushing-carts_123891-141488.jpg"
            alt="Signup Illustration"
            className="signup-image"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
