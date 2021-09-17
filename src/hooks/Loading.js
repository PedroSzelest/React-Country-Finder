import  React from "react"
import { Spinner } from "reactstrap"
import "./Loading.css"
import "bootstrap/dist/css/bootstrap.min.css"

const Loading = ()=> {
    return (
        <div className="loading">
            <Spinner animation="border" role="status" className="spinnerLoading">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loading