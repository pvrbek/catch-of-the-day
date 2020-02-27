import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base"

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount() {
        const {params} = this.props.match;
        //Reinstate localstorage
        const localStorageRef = localStorage.getItem(params.storeID);
        if (localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeID}/fishes`, {
            context: this,
            state: "fishes"
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeID, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addFish = (fish) => {
        // Take a copy of the existing state for old fishes
        const fishes = {...this.state.fishes};
        // Add new fish to fishes variable with unique key
        fishes[`fish${Date.now()}`] = fish;
        // Set fishes state
        this.setState({fishes}); // fishes: fishes
    };
    updateFish = (key, updatedFish) => {
        const fishes = {...this.state.fishes};
        fishes[key] = updatedFish;
        this.setState({fishes:fishes});
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
        order[key] = order[key] + 1 || 1;
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
                            index={key}
                            details={this.state.fishes[key]}
                            addToOrder={this.addToOrder}/>))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory addFish={this.addFish} updateFish={this.updateFish} loadSampleFishes={this.loadSampleFishes}
                           fishes={this.state.fishes}/>
            </div>
        )
    }
}

export default App;
