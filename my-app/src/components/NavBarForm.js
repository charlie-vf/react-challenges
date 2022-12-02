import React from 'react'
import css from './css/NavBarForm.module.css'
import NavBarChild from './css/NavBarChild'

class NavBarForm extends React.Component {

    constructor(props) {
        
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    toggleButtonClick = () => {
        this.setState((prevState) => ({
            isLoggedIn: prevState.isLoggedIn ? false : true
        }), () => console.log(this.state.isLoggedIn))
    }


    render() {
        return (
            <div className = {css.NavBar}>
                <h1>My Gallery</h1>
                {/* { 
                this.state.isLoggedIn ? 
                    <button onClick={() => this.toggleButtonClick()}>
                    Log in
                    </button>
                    : 
                    <form>
                        <label htmlFor = "username">Username:</label>
                        <input placeholder="username" id="username"></input>

                        <label htmlFor = "password">Password:</label>
                        <input placeholder="password" id="password"></input>

                        <button onClick={() => this.toggleButtonClick()}>
                        Submit
                        </button>
                    </form>
                } */}
                {/* Refactored Version using child: */}
                <NavBarChild
                isLoggedIn={this.state.isLoggedIn}
                toggleClick={this.toggleButtonClick}
                />
            </div>
        )
    }
}

export default NavBarForm