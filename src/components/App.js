import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
    render() {
        return (
            <div className={"catch-of-the-day"}>
                <div className={"menu"}>
                    <Header tagLine={"Fresh Seafood Market"} age={50}></Header>
                </div>
                <Inventory></Inventory>
                <Order></Order>
            </div>
        )
    }
}

export default App;
