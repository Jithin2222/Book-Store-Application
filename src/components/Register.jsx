// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './Form.css';


// const Register = () => {

//     const [inputs, setInputs]=useState({});
//     const navigate = useNavigate();

//     const handleChange = (event) => {
//         const inputName = event.target.name;
//         const inputValue = event.target.value;
//         setInputs({...inputs, [inputName]:inputValue});
//     }
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(inputs);
//         alert(`Welcome ${inputs.name}!`);
//     }
//     const Submit = () => {
//         if (inputs.password === inputs.confirmpassword) {
//             navigate('/home')
//         }else{
//             alert('Passwords do not match');
//             console.error(error.message);
//         }
//     }

//     return(
//         <>
//             <div className="content-login">
//                 <h1>REGISTER</h1>
//                 <form onSubmit={handleSubmit}>
//                     <label>Name</label>
//                     <input type="text" name="name" id="name" value={inputs.name || ""} onChange={handleChange} placeholder="Enter Your name.."/>
//                     <label>Email</label>
//                     <input type="email" name="useremail" id="useremail" value={inputs.useremail || ""} onChange={handleChange} placeholder="Enter you email..." />
//                     <label>Password</label>
//                     <input type="password" name="password" id="password" value={inputs.password || ""} onChange={handleChange} placeholder="Enter your password..." />
//                     <label>Confirm Password</label>
//                     <input type="password" name="confirmpassword" id="confirmpassword" value={inputs.confirmpassword || ""} onChange={handleChange} placeholder="Enter your password one more time"/>
//                     <button onClick={Submit} type="submit">Register</button>
//                 </form>
//             </div>
//         </>
//     )
// };

// export default Register;