import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RickAndMortyDetails() {
    const [data, setData] = useState({})

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) => response.json())
            .then((res) => setData(res))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className="rick-and-morty-details">
            <ul>
                <li>
                    <h1>{data.name}</h1>
                    <img src={data.image} alt={`Image de ${data.name}`} className="rick-and-morty-details_li_img" />
                    <p>{data.gender}</p>
                    <p>{data.species}</p>
                    <p>{data.status}</p>
                </li>
            </ul>
        </div>
    )
    
}


export default RickAndMortyDetails;