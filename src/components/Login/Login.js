export default function Login () {
    return (
        <>
            <h1 style={{"text-align": "center", "text-transform": "uppercase", color: "red", }}>under construction</h1>
            <section className="login">
                <div className="login_txt">
                    <p>
                        FINISH <br />
                        WHAT <br />
                        YOU <br />
                        START
                    </p>
                </div>
                <form action="">
                    <h1>Login</h1>
                    <input type="email" name="username" id="username" placeholder="Enter your E-Mail" required /> <br />
                    <input type="password" name="password" id="password" placeholder="Enter your Password" required /> <br />
                    <input type="submit" value="Login" /> <br />
                    <a href="" className="signup">SignUp</a>
                </form>
            </section>
        </>
    )
}