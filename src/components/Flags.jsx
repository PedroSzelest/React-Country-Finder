import "./Flags.css"
import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"

const Flags = ()=> {
    const { data } = useFetch("https://restcountries.eu/rest/v2/all")        

    return(
        <section className="section-flags">
            {data === undefined? "" : data.map(flag=> {
                return(
                    <div className="flag">
                    <img src={flag.flag} alt={flag.name}/>
                    <Link to={`/flags/${flag.name}`}>
                        <div className="legend">
                            <legend>{flag.name}</legend>
                        </div>
                    </Link>
                </div>
                )
            })}
        </section>
    )
}

export default Flags