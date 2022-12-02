import React from 'react'

function NavBarChild(props) {
  return (
    props.isLoggedIn ?
    <button onClick={props.toggleClick}>
    Log in
    </button>
    :
    <form>
        <label htmlFor="username">Username:</label>
        <input placeholder="username" id="username"></input>

        <label htmlFor="password">Password:</label>
        <input placeholder="password" id="password"></input>

        <button onClick={props.toggleClick}>
            Submit
        </button>
    </form>
  )
}

export default NavBarChild