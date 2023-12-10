import React, { useEffect, useState } from 'react';

function Filtering() {

    const initialState = [
        { breed: "Dogs", names: ["Hadi", "Rex",] },
        { breed: "Cats", names: ["Leo", "Luna"] },
        { breed: "Wolves", names: ["Ahmad", "White"] }
    ]
    const [selectedOption, setSelectedOption] = useState('')
    const [animals, setAnimals] = useState(initialState)

    useEffect(() => {
        if (selectedOption === '') {
            setAnimals(initialState);
        } else {
            const filteredAnimals = initialState.filter(animal => animal.breed === selectedOption);
            setAnimals(filteredAnimals);
        }
    }, [selectedOption]);

    return (
        <>
            <select onChange={(e) => setSelectedOption(e.target.value)} >
                {initialState.map((animal) => <option value={animal.breed} >{animal.breed}</option>)}
            </select>
            <ul>
                {animals.map((animal) => <>{animal.names.map(name => <p>{name}</p>)}</>)}
            </ul>
        </>
    );
}

export default Filtering;