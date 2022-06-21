import React from 'react';
import './auth.css'

const Auth = ()=>{
    return(
        <div className= 'gpt3__auth'>
            <div className = 'gpt3__auth-container'>
                <div className='gpt3__auth-form'>
                    <form>
                        <input/>
                        <input/>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth