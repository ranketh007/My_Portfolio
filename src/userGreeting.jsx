import PropTypes from 'prop-types'
function UserGreeting({isLoggedIn=false, userName="Dini"}){

    const welcomeMsg = <h2 className="welcome-msg">Welcome {userName}</h2>;
    const loginPrmpt = <h2 className="login-prmpt">Please Login to Continue</h2>;

    return(isLoggedIn ? welcomeMsg : loginPrmpt );
                            
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string
}

export default UserGreeting