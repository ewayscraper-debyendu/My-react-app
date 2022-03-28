import React, { useState } from 'react'

const Register = () => {
    const [userRegistration, setuserRegistration]  = useState({
        email: "",
        phone: "",
        psw: "",
        psw_repeat: ""

     });

     const [records, setrecords] = useState([]);
    const handleInput = (e) => {
     const name = e.target.name;
     const value = e.target.value;
      console.log(name, value);
     setuserRegistration({...userRegistration, [name]: value });
    }

    const hanldeSubmit = (e) =>{
        e.preventDefault();
      const newRecord = {...userRegistration, id: new Date().getTime().toString()};
    console.log(records);
      setrecords([...records, newRecord]);
      console.log(records);
      setuserRegistration({email: "", phone: "", psw: "", psw_repeat: ""});
    }
  return (
   <>
   <form action="" onSubmit={hanldeSubmit}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" onChange={handleInput} value={userRegistration.email} name="email" id="email" required />
          <label htmlFor="phone"><b>phone</b></label>
          <input type="text" placeholder="Enter Phone number" onChange={handleInput} value={userRegistration.phone} name="phone" id="phone" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" onChange={handleInput} value={userRegistration.psw} name="psw" id="psw" required />
          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" onChange={handleInput} value={userRegistration.psw_repeat} name="psw_repeat" id="psw-repeat" required />
          
          <button type="submit" className="registerbtn">Register</button>
        </div>
       
      </form>
      <div>
      {
        records.map((curElem) => {
          //const {id, email,password} = curElem;
          return(
            <div className='showDataStyles' key={curElem.id}>
              <p>{curElem.email}</p>
              <p>{curElem.phone}</p>
              <p>{curElem.psw}</p>
              <p>{curElem.psw_repeat}</p>
            </div>
          )
        })
      }
    </div>
   </>
  )
}

export default Register