import React from 'react';

function App() {
    //save input in state
    const [input, setInput] = React.useState({
        name: ''
    })

    //on change update state of input
    function handleChange(event) {
        const {name, value} = event.target
        setInput(prevInput => ({
            ...prevInput,
            [name]: value
        }))
    }

    //create state to hold names
    const [namesArr, setNamesArr] = React.useState([])
    //on submit add new name to names array
    function handleSubmit(event) {
        event.preventDefault()
        setNamesArr(prev => [...prev, input.name])
        //reset input to black to clear form
        setInput({name: ''})

    }
    //map over names arr to render names to list
    const namesList = namesArr.map((name, index) => {
        return (
            <li key={index}> {name}</li>
        )
    })

    return (
        <div class="container">
            <form name="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={input.name}
                    onChange={handleChange}
                />
                <button>Add name</button>
            </form>
            <h1> {input.name} </h1>
            <ol>
                {namesList}
            </ol>
        </div>
    );
}

export default App