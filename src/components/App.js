import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = (fish) => {
        // Take a copy of the existing state for old fishes
        const fishes = {...this.state.fishes};
        // Add new fish to fishes variable with unique key
        fishes[`fish${Date.now()}`] = fish;
        // Set fishes state
        this.setState({fishes}); // fishes: fishes
    };
    render() {
        return (
            <div className={"catch-of-the-day"}>
                <div className={"menu"}>
                    <Header tagLine={"Fresh Seafood Market"} age={50}/>
                </div>
                <Order/>
                <Inventory addFish = {this.addFish}/>
            </div>
        )
    }
}

export default App;
