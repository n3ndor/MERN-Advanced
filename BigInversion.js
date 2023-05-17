import React, { Component } from "react";
import "./App.css";

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hair } = this.props;
        return (
            <div className="container">
                <h2>
                    {lastName}, {firstName}
                </h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hair}</p>
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <div>
                <PersonCard
                    firstName={"Jane"}
                    lastName={"Doe"}
                    age={45}
                    hair={"Black"}
                />
                <PersonCard
                    firstName={"John"}
                    lastName={"Smith"}
                    age={88}
                    hair={"Brown"}
                />
                <PersonCard
                    firstName={"Millard"}
                    lastName={"Fillmore"}
                    age={50}
                    hair={"Brown"}
                />
                <PersonCard
                    firstName={"Maria"}
                    lastName={"Smith"}
                    age={62}
                    hair={"Brown"}
                />
            </div>
        </div>
    );
}

export default App;
export { PersonCard };
