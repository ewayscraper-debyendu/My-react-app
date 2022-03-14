import React, { useEffect, useState } from "react";


const UseEffectApi = () =>{
     
    const [users, setUsers] = useState([]);
    const getUsers = async () =>{
        const responce = await fetch('https://api.github.com/users');
       // console.log(responce);
       // const data = await responce.json();
       setUsers(await responce.json());
       // console.log(data);

    };

    useEffect(() =>{
        getUsers();
    }, []);

    return(
        <div>
            <h2>Get Github Users Data using useEffect Hook with Fetch API</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
            {
                users.map((curElem) => {
                    return(
                        <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                        <div className="card p-2">
                            <div className="d-flex align-items-center">
                                    <div className="image"> <img src={curElem.avatar_url} className="rounded" width="155" alt=""/> </div>
                                <div className="ml-3 w-100">
                                        <h4 className="mb-0 mt-0 textLeft">{curElem.login} </h4><span className="text-left">Web Devloper</span>
                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                            <div className="d-flex flex-column">
                                                <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                            <div className="d-flex flex-column">
                                                <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                            <div className="d-flex flex-column">
                                                <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            </div>
           </div>
        </div>
    );
};

export default UseEffectApi;