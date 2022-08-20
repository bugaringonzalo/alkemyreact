function Login () {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        const validation = email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        
        if(!email || !password) {
            return console.log('Email and password are required');
        }
        if(!validation) {
            return console.log('Email input must be valid')
        }
        if(email !== 'alkemy@gmail.com' || password !== 'react') {
            return console.log('Credentials invalid')
        }

        console.log('Login successfull');
    }

    return (
        <div>
            <h2>Formulario de Login !</h2>
            <form action="post" onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <span>Email: </span>
                    <br />
                    <input type="email" name="email" />
                </label>
                <br />
                <label htmlFor="password">
                    <span>Password: </span> 
                    <br />
                    <input type="password" name="password" />
                </label>
                <br />
                <br />
                <button type="submit"> Ingresar ! </button>
            </form>
        </div>
    )
}


export default Login;