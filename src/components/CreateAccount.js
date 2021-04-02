import React, { useEffect, useState } from 'react'

function CreateAccount() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [copyPassword, setCopyPassword] = useState('');

    // const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Ty[e': 'application/json'},
    //     body: JSON.stringify({ title: 'React POST Request Example'})
    // };
    
    // useEffect(() => {
    //     fetch('/api/createaccount/jbbbb/password', requestOptions)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))
    // }, []);    


    function handleUsername(e) {
        setUsername(e.target.value)
    };

function handlePassword(e) {
    setPassword(e.target.value) 
};

// function handleCopyPassword(e) {
//     setCopyPassword(e.target.value)
// };

function handleSubmit(e) {
    e.preventDefault();
    fetch(`api/createaccount/${username}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

    fetch(`api/createaccount/${password}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}



    return(
        <div style={{ 
            border: '15px solid grey',
            width: '400px',
            padding: '50px',
            margin: '0 auto',
            display: 'flex',
            
        }}>
            
            <div className='form-group' >
            <h1 className='display-6' style={{marginBottom:'70px'}}>Create An Account</h1>
            <form onSubmit={handleSubmit}>
            <input className='form-control'  onChange={handleUsername} style={{marginBottom:'20px'}} placeholder='Username'/>
            <input className='form-control' onChange={handlePassword} type='password' style={{marginBottom:'20px'}} placeholder='Password'/>
            <input className='form-control' type='password' style={{marginBottom:'20px'}} placeholder='Re-type Password'/>
            <button type='submit'  className='btn btn-info' >Create Account</button>
            </form>
            </div>
        </div>
    )
}

export default CreateAccount