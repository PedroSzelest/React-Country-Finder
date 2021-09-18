import React from "react"
import { Link } from "react-router-dom"
import "./NotFound.css"

const NotFound = ()=> {
    return (
        <section className="not-found">
            <h3>Sorry, the page wasn't found, come back to menu using the button below.</h3>
            <Link to="/">
                <button>BACK TO THE MENU</button>
            </Link>
        </section>
    )
}   

export default NotFound