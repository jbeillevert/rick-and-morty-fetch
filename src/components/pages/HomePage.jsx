import React, { useEffect, useState } from "react";
import RickAndMortyCard from "../RickAndMortyCard";




function HomePage() {
    const[data, setData] = useState([])
    const[selectedValue, setSelectedValue] = useState("...")


    useEffect(() => {


        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((res) => setData(res.results))
            .catch((err) => console.error(err))
    }, [])

    function handleChange(e) {
        setSelectedValue(e.target.value) 
        
    }

    return (
        <main className="home-page"> 

            <select className="home-page_select" onChange={handleChange}>
                <option>...</option>
                {
                    data.map((character) => {
                        return (
                            <option key={character.id}>{character.name}</option>
                        )
                    })
                }
            </select>

            <ul>
                {
                    data
                        .filter((character) => selectedValue === "..." || selectedValue === character.name)
                        .map((character) => {
                            return (
                                <RickAndMortyCard key={character.id} id={character.id} name={character.name} img={character.image} />
                            )
                        })
                }
                
                 
            </ul>

        </main>
    )
}

export default HomePage;