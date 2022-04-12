import React from 'react'

function Welcome() {
    return <>
        <h1>Welcome Abhishek Singh</h1>
        <button> Logout! </button>
    </>
}
function Guest() {
    return <>
        <h1>Please Login!</h1>
        <button> Login </button>
    </>
}

const Login = (props) => {
    console.log(props);                     // { loggedIn : false }
    const loggedIn = props.loggedIn
    
    if(loggedIn)    {
        return <Welcome />
    } 
    return <Guest /> 
}

export default Login




