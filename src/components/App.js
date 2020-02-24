import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

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

    loadSampleFishes = () => {
        const fishes = {...this.state.fishes};
        Object.keys(sampleFishes).map(key =>
            fishes[`${key}`] = sampleFishes[key]
        );
        this.setState({fishes});
    };

    addToOrder = (key) => {
        // Take a copy of the existing order state
        const order = {...this.state.order};
        //Add or update number of orders
        order[key] = order[key] +1 || 1;
        this.setState({order});
    };
    render() {
        return (
            <div className={"catch-of-the-day"}>
                <div className={"menu"}>
                    <Header tagLine={"Fresh Seafood Market"} age={50}/>
                    <ul className={"fishes"}>
                        {Object.keys(this.state.fishes).map(key => (<Fish
                            key={key}
                            index = {key}
                            details={this.state.fishes[key]}
                            addToOrder={this.addToOrder}/>))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish = {this.addFish} loadSampleFishes = {this.loadSampleFishes}/>
            </div>
        )
    }
}

export default App;
