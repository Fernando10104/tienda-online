import { useState , useEffect } from 'react'

function Products2() {
    const [Productoiniciales, setProductoiniciales] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/productos')
            .then((response) => response.json())
            .then((data) => {
                console.log(data, 'productos desde fetch')
                setProductoiniciales(data)
            })
            .catch((error) => console.error('Error fetching data:', error))
    }, [])
    
    return Productoiniciales

    }

export default Products2