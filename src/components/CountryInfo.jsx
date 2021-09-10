import  { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import "./CountryInfo.css"

const CountryInfo = ()=> {
    const { country } = useParams()

    const { data } = useFetch(`https://restcountries.eu/rest/v2/name/${country}`)
    
    return(
        <>
            {data === undefined? "" : data.map( info => {
                return(
                    <section key={info.name} className="section-info">
                        <div className="image-info" key={info.name}>
                            <img src={info.flag} alt={info.name}/>
                        </div>
                        <div className="text-info">
                            <div className="text-info-name">
                                <p>{info.name}</p>
                            </div>
                            <div className="text-info-capital">
                                <p>CAPITAL:</p>
                                <p>{info.capital}</p>
                            </div>
                            <div className="text-info-region">
                                <p>REGION:</p>
                                <p>{info.region}</p>
                            </div>
                            <div className="text-info-subregion">
                                <p>SUBREGION:</p>
                                <p>{info.subregion}</p>
                            </div>
                            <div className="text-info-population">
                                <p>POPULATION:</p>
                                <p>{info.population}</p>
                            </div>
                            <div className="text-info-demonym">
                                <p>DEMONYM:</p>
                                <p>{info.demonym}</p>
                            </div>
                            <div className="text-info-languages">
                                <p>LANGUAGE:</p>
                                {info.languages.map( e => {
                                        return (
                                            <p>{e.name}</p>
                                        )
                                    })}
                            </div>
                            <div className="text-info-acronym">
                                <p>ACRONYM:</p>
                                <p>{info.alpha2Code}</p>
                            </div>
                        </div>
                    </section>
                )
            })}
        </>
    )
}

export default CountryInfo