import React from 'react'

function CreateAccount() {
    return(
        <div style={{ 
            border: '15px solid grey',
            width: '400px',
            padding: '50px',
            margin: '0 auto',
            display: 'flex',
            
        }}>
            
            <div className='form-group' style={{}}>
            <h1 className='display-6' style={{marginBottom:'70px'}}>Create An Account</h1>
            <input className='form-control' style={{marginBottom:'20px'}} placeholder='Username'/>
            <input className='form-control'type='password' style={{marginBottom:'20px'}} placeholder='Password'/>
            <input className='form-control' type='password' style={{marginBottom:'20px'}} placeholder='Re-type Password'/>
            <button type='button' className='btn btn-info' >Create Account</button>
            </div>
        </div>
    )
}

export default CreateAccount