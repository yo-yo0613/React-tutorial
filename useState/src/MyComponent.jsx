import React, {useState} from "react";

function MyComponent(){

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmpolyedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmpolyedStatus}>Toggle Status</button>
        </div>
    );

}

export default MyComponent;