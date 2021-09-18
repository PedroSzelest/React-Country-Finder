import React, { useState, useRef, useEffect } from "react"
import "./Flags.css"
import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"
import Loading from "../hooks/Loading"

const Flags = ()=> {
    const { data } = useFetch("https://restcountries.eu/rest/v2/all")   
    const sentinel = useRef()
    
    const [loading, setLoading] = useState(false)
    const [flag, setFlag] = useState([])
    const [scroll, setScroll] = useState(0)
    
    
    const loader = ()=> {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
        }, 1000)
    }
    useEffect(()=> {
        loader()
    }, [])
    
    useEffect(() => {
        const selectFlags = (scroll)=> {
            if(data !== undefined) {
                    setFlag(()=> data.filter( (country, index)=> index < scroll))
            } 
                
        }
        selectFlags(scroll)
    }, [scroll])

    
    useEffect(()=> {
        const scrollObserver = new IntersectionObserver(()=> {
            setScroll( scroll => scroll + 12) 
        })
        
        scrollObserver.observe(sentinel.current)

    }, [])
    
    
    
    const createFlags = ()=> {
        if(loading) {
            return (
                <Loading />
            )
        } else {
            return (flag.map(flag=> {
                return(
                <div id={flag.name} className="flag">
                    <img src={flag.flag} alt={flag.name}/>
                    <Link to={`/flags/${flag.name}`}>
                        <div className="legend">
                            <legend>{flag.name}</legend>
                        </div>
                    </Link>
                </div>
                )
            }))
        }
    }


    return(
        <section className="section-flags">
            {createFlags()}
            <div ref={sentinel} className="sentinel"></div>
        </section>
    )
}

export default Flags