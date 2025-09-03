import React from "react";
import { useState } from "react";

const Login = () => {

    const[first_name,setfirst_name]=useState(null)
    const[last_name,setlast_name]=useState(null)
    const[email,setemail]=useState(null)
    const[phone,setphone]=useState(null)
    const[password,setpassword]=useState(null)


  // Container style
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    margin: 0,
  };

  // Form style
  const formStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    width: "350px",
    display: "flex",
    flexDirection: "column",
  };

  // Input fields style
  const inputStyle = {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  // Button style
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
    
  const signup = async ()=>{
    const data=new FormData()
    data.append("first_name",first_name)
    data.append("last_name",last_name)
    data.append("email",email)
    data.append("phone",phone)
    data.append("password",password)

    const response = await axios.post("http://127.0.0.1:8000/register/?first_name="+first_name+"last_name="+last_name+"email="+email+"phone="+phone+"password="+password,data)
    
    console.log(response)
  }


  return (
    <div style={containerStyle}>
      <form style={formStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
          Login
        </h2>
        <input type="email" placeholder="Email" style={inputStyle} required />
        <input type="password" placeholder="Password" style={inputStyle} required />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
