import {useState, useEffect} from 'react'

const useFetch = (url) => {
    
    // const abrtCont = new AbortController()

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url, 
                )
                // {signal: abrtCont.signal} 
            .then(res => {
                if(!res.ok){
                    throw Error("Could not fetch the data")
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
                // if (err.name === 'AbortError'){
                    //     console.log('Fetch Aborted')
                    // }
                    // else{
                        // }
            })
        }, 1000)

        // return () => abrtCont.abort()

    }, [url])
    
    return {data, isPending, error}
}

export default useFetch
