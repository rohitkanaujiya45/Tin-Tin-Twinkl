// import React from 'react';
// import "../../style/Extranavbar.css"
// import { Input } from '@chakra-ui/react'
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { userLogoutSet } from '../../reduxstore/action';
// import { useDispatch } from 'react-redux';
// import { useState } from 'react';
// import { useRef } from 'react';
// // import { useNavigate } from 'react-router-dom';
// function Extranavbar(props) {
//     let navigate = useNavigate();
//     let navigaterhandler = (location)=>{
//         navigate(location);
//     }
//     let searchRef = useRef();
//     let authenticationstatus = useSelector((myState)=>{return {
//         authen: myState.isAuth,
//         name: myState.currentUser.firstName
//     }})
   
//     const handlesearch = (e)=>{
//         let  value = e.target.value;
//         if(value === "boy"){
//             navigate("/products/boys-clothes")
//         }else if(value === "girl"){
//             navigate("products/girls-clothes")
//         }else if(value === "footwear"){
//             navigate("/products/Footwear")
//         }
//     }
//     let [isLoading, setLoading] = useState(false);
//     let dispatch = useDispatch();
//     let handlelogout = ()=>{
//         setLoading(true);
//        userLogoutSet(dispatch);
//        setTimeout(()=>{
//             setLoading(false);
//        },3000)
//     }
//     return (
//         <div style={{width:"100%"}} className="allcontainer">
//             <div className='leftsidecontnav'>
//                 <img onClick={()=>{navigate("/")}} src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"></img>
//                 <div style={{marginLeft:"20px"}}>  <Input ref={searchRef} variant='outline' size="sm" placeholder='Search Category' onChange={handlesearch}/></div>
//             </div>
//             <div className='rightsidecontnav'>
//                   <p>Stores & Preschools  |</p>
//                   <p>Support | </p>
//                   <p>Track Order | </p>
//                   <p>FirstCry Parenting | </p>
//                   {authenticationstatus.authen ? <div>
//                     <p onClick={()=>{handlelogout()}} style={{cursor:"pointer"}}>{authenticationstatus.name} {" "} |</p>
//                   </div>:
//                    <p onClick={()=>{navigaterhandler("/login")}} style={{cursor:"pointer"}}>Login | </p>
//                   }
                 
//                   <p onClick={()=>{navigaterhandler("/cart")} } style={{cursor:"pointer"}}>Cart</p>
//             </div>
           
//         </div>
//     );
// }

// export default Extranavbar;


// import React, { useState, useRef } from 'react';
// import "../../style/Extranavbar.css";
// import { Input } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { userLogoutSet } from '../../reduxstore/action';

// function Extranavbar() {
//     const navigate = useNavigate();
//     const searchRef = useRef();
//     const dispatch = useDispatch();
//     const [isLoading, setLoading] = useState(false);

//     const authenticationStatus = useSelector((state) => ({
//         authen: state.isAuth,
//         name: state.currentUser?.firstName || 'Guest',
//     }));

//     const handleSearch = (e) => {
//         const value = e.target.value.toLowerCase();
//         if (value === "boy") navigate("/products/boys-clothes");
//         else if (value === "girl") navigate("/products/girls-clothes");
//         else if (value === "footwear") navigate("/products/Footwear");
//     };

//     const handleLogout = () => {
//         setLoading(true);
//         userLogoutSet(dispatch);
//         setTimeout(() => setLoading(false), 3000);
//     };

//     const navigateHandler = (location) => {
//         navigate(location);
//     };

//     return (
//         <div className="allcontainer">
//             <div className="leftsidecontnav">
//                 <img
//                     onClick={() => navigate("/")}
//                     src="https://btechmart.com/assets/images/logo001.png"
//                     alt="Logo"
//                 />
//                 <Input
//                     ref={searchRef}
//                     variant="outline"
//                     size="sm"
//                     placeholder="Search Category"
//                     onChange={handleSearch}
//                 />
//             </div>
//             <div className="rightsidecontnav">
//                 {/* <p>Stores & Preschools</p>
//                 <p>Support</p>
//                 <p>Track Order</p>
//                 <p>Btechmart Parenting</p> */}
//                 {authenticationStatus.authen ? (
//                     <p
//                         className="logout-btn"
//                         onClick={handleLogout}
//                     >
//                         {authenticationStatus.name} |
//                     </p>
//                 ) : (
//                     <p
//                         onClick={() => navigateHandler("/login")}
//                         style={{ cursor: "pointer" }}
//                     >
//                         Login |
//                     </p>
//                 )}
//                 <p
//                     className="cart"
//                     onClick={() => navigateHandler("/cart")}
//                 >
//                     Cart
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Extranavbar;
import React, { useState, useRef } from "react";
import "../../style/Extranavbar.css";
import { Input } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogoutSet } from "../../reduxstore/action";

function Extranavbar() {
    const navigate = useNavigate();
    const searchRef = useRef();
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);

    const authenticationStatus = useSelector((state) => ({
        authen: state.isAuth,
        name: state.currentUser?.firstName || "Guest",
    }));

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        if (value === "boy") navigate("/products/boys-clothes");
        else if (value === "girl") navigate("/products/girls-clothes");
        else if (value === "footwear") navigate("/products/Footwear");
    };

    const handleLogout = () => {
        setLoading(true);
        userLogoutSet(dispatch);
        setTimeout(() => setLoading(false), 3000);
    };

    const navigateHandler = (location) => {
        navigate(location);
    };

    return (
        <div className="allcontainer">
            <div className="leftsidecontnav">
                <img
                    onClick={() => navigate("/")}
                    src="https://btechmart.com/assets/images/logo001.png"
                    alt="Logo"
                />
                <div className="search-container">
                    
                    <Input
                        ref={searchRef}
                        variant="outline"
                        size="sm"
                        placeholder="Search Category"
                        onChange={handleSearch}
                        
                    /><FontAwesomeIcon icon={faSearch} />
                </div>
            </div>
            <div className="rightsidecontnav">
                {authenticationStatus.authen ? (
                    <p
                        className="logout-btn"
                        onClick={handleLogout}
                        style={{ display: "flex", alignItems: "center", gap: "5px" }}
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        {authenticationStatus.name}
                    </p>
                ) : (
                    <p
                        onClick={() => navigateHandler("/login")}
                        style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}
                    >
                        <FontAwesomeIcon icon={faSignInAlt} />
                        Login
                    </p>
                )}
                <p
                    className="cart"
                    onClick={() => navigateHandler("/cart")}
                    style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    Cart
                </p>
            </div>
        </div>
    );
}

export default Extranavbar;
