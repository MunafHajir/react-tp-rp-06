import { useState } from "react";

function Login() {
    var componentName = "Login";
    var [username, setUsername] = useState("")
    var [password, setPassword] = useState("")

    function handleUserChange(event) {
        var value = event.target.value;
        setUsername(value)

    }

    function handlePasswordChange(event) {
        var value = event.target.value;
        setPassword(value)
    }

    return (
        <>
        <div style={{textAlign: "center"}}>
            <h1>{componentName}</h1>

            <div style={{padding: "20px"}}>
                <input 
                onChange={ function(event) { handleUserChange(event) }  }
                type="text" 
                placeholder="Enter Username" 
                style={{padding: "10px"}}/>
            </div>
            <div style={{padding: "20px"}}>
                <input 
                onChange={ function(event) {
                    handlePasswordChange(event)
                } }
                type="password" 
                placeholder="Enter Password" 
                style={{padding: "10px"}}/>
            </div>

            <div>
                <button style={{padding: "10px 20px"}}> Submit </button>
            </div>
        </div>

        <div>
              <h1>Username: { username  }</h1>  
              <h2>Password: { password } </h2>
        </div>
        </>

    )
}

export default Login;
