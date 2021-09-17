import { useState, useEffect } from "react"

const useFetch = url => {
    const [data, setData] = useState()
    useEffect(()=> {
        const getData = async url => {
            try {
                const res = await fetch(url)
                const result = await res.json()
                return setData(result)
            } catch(err) {
                console.log(err)
            }
        }
        
        getData(url)
    }, [url])
    
    console.log(data)
    return { data }
}

export default useFetch