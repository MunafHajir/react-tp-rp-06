import Input from '../common/Input';
import Button from '../common/Button'

function Login() {
    var componentName = "Login";

    return (
        <div style={{backgroundColor: "blue", color: "white"}}>
            <h1>{componentName}</h1>

            <div>
                <Input />
            </div>
            <div>
                <Input />
            </div>

            <div>
                <Button />
            </div>
        </div>

    )
}

export default Login;
