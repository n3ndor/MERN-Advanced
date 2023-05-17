import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    increaseAge = () => {
        this.setState(prevState => ({
            age: prevState.age + 1
        }));
    }

    render() {
        const { firstName, lastName, hair } = this.props;
        const { age } = this.state;
        return (
            <div className="container">
                <h2>
                    {lastName}, {firstName}
                </h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hair}</p>
                <button onClick={this.increaseAge}>Birthday Button for {this.firstName}</button>
            </div>
        );
    }
}

class App extends Component {
    render() {
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
}

export default App;
export { PersonCard };
