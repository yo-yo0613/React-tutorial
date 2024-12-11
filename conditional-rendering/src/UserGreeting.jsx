
function UserGreeting(props){   

    const welcomeMessage = <h2 className="welcome-message">
                            welcome {props.name}
                           </h2>
    
    const loginPrompt = <h2 className="login-prompt">
                        Please log in to continue
                        </h2>

    if(props.isLoggedIn ? welcomeMessage : loginPrompt);
}
UserGreeting.prototype = {
    isLoggedIn:propTypes.bool,
    username:propTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting