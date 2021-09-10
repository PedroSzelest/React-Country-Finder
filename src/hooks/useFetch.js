import { useState, useEffect } from "react"

const useFetch = url => {
    console.log(url)
    const [data, setData] = useState()
    
    const getData = async url => {
        try {
            const res = await fetch(url)
            const result = await res.json()
            return setData(result)
        } catch(err) {
            console.log(err)
        }
    }


    useEffect(()=> {
        getData(url)
    }, [url])

    return { data }
}

export default useFetch