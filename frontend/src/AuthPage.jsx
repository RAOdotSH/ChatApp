import axios from 'axios'

const AuthPage = (props) => {
    // on Submit call
    const onSubmit = (e) => {
        e.preventDefault();

        // get the value of the input
        const { value } = e.target[0];

        console.log(value);

        // send a POST request to the backend
        axios.post("http://localhost:3001/authenticate", { username: value })
            .then((res) => {
                // set the user in the App component
                props.onAuth({...res.data, secret: value})

                // redirect to the chats page
                // props.history.push("/chats");

                console.log("Success", res);
            })
            .catch((err) => {
                console.log("Error", err);
            });

        // clear the input
        // e.target[0].value = "";
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Namaste 👋</div>

                <div className="form-subtitle">Set your username and get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input className="auth-input" type="text" name="username"/>
                    <button className="auth-button" type="submit">Enter</button>
                </div>
            </form>
        </div>
    );
}

export default AuthPage;