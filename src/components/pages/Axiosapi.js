import React, { useEffect, useState } from "react";
import axios from "axios";

const Axiosapi = () => {
    const [num, setNum] = useState();
    const [moves, setMoves] = useState();
    const [name, setName] = useState();
    useEffect(() => {
        async function getData() {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
          setName(res.data.forms[0].name);
          setMoves(res.data.moves.length);
        }
        getData();
      });
    return(
     <div style={{textAlign:"center"}}>
         <h1> Fetch pokemon api data using Axios npm </h1>
         https://pokeapi.co/api/v2/pokemon/
         <h3>You chose {num} value</h3>
         <select value={num} onChange={(event) =>{
         setNum(event.target.value);
         }}>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="25">25</option>
         </select>
         <h2> You chose this <span style={{color:"green"}}>{name} </span>pokemon </h2>
        <h3> the number of moves is = <span style={{color:"red"}}>{moves} </span></h3>
    
     </div>
    );
};

export default Axiosapi;