import React, { useEffect } from "react";
import { useState } from "react";


import axios from 'axios'

const Register = () => {
  // Define CSS as JS objects

   
  const formRef = useRef();
   const[first_name,setfirst_name]=useState(null)
   const[last_name,setlast_name]=useState(null)
   const[email,setemail]=useState(null)
   const[phone,setphone]=useState(null)
   const[password,setpassword]=useState(null)
   const [message, setMessage] = useState(""); // to store success/error message




  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    margin: 0,
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    width: "350px",
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const buttonStyle = {
    padding: "12px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };

   

   const signup = async (e)=>{
    e.preventDefault();
    try{

    const response = await axios.post("http://127.0.0.1:8000/register/", {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      password: password
    });
    
    console.log(response.data.message)
    setMessage(response.data.message);
}

    catch (error) {
    if (error.response) {
      // Show error message from backend
      setMessage(error.response.data.error);
    } else {
      setMessage("Something went wrong!");
    }
  }

    
  }



  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
          Register
        </h2>
         {message && (
    <p style={{ color: "green", textAlign: "center", marginBottom: "15px" }}>
      {message}
    </p>
  )}
        <input onChange ={(event)=>setfirst_name(event.target.value)} type="text" placeholder="First Name" style={inputStyle} required />
        <input onChange ={(event)=>setlast_name(event.target.value)} type="text" placeholder="Last Name" style={inputStyle} required />
        <input onChange ={(event)=>setemail(event.target.value)} type="email" placeholder="Email" style={inputStyle} required />
        <input onChange ={(event)=>setphone(event.target.value)} type="text" placeholder="Phone" style={inputStyle} required />
        <input onChange ={(event)=>setpassword(event.target.value)} type="password" placeholder="Password" style={inputStyle} required />
        <button onClick={signup} type="submit" style={buttonStyle}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
