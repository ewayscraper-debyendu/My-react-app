import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllentry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if(email && password){
      const newEntry = {id: new Date().getTime().toString(), email :email, password: password};
   setAllentry([...allEntry, newEntry]);
   //console.log(allEntry);
   setEmail("");
   setPassword("");

    }else{
      alert('please fill the data');
    }
   
  }
  return (
    <>
    <form action="" onSubmit={submitForm} style={{textAlign:'center'}}>
      <h3>Login form</h3>
      <div>
        <label htmlFor='email'>Email</label>
        <input type="text" id="email" name="email" autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor='password'>password</label>
        <input type="password" id="password" name="password"  autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
       <div>
         <button type="submit">Login</button>
       </div>
    </form>
    <div>
      {
        allEntry.map((curElem) => {
          //const {id, email,password} = curElem;
          return(
            <div className='showDataStyles' key={curElem.id}>
              <p>{curElem.email}</p>
              <p>{curElem.password}</p>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Login