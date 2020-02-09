import React, {Fragment} from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        event.preventDefault(); // Stop form from submitting
        const storeName = this.myInput.current.value; //get input value
        this.props.history.push(`/store/${storeName}`) //set url
    };
    render() {
        return (
            <Fragment>
                <h1>Main</h1>
                <form className={"store-selector"} onSubmit={this.goToStore}>
                    <h2>Enter A Store</h2>
                    <input
                        ref={this.myInput}
                        type={"text"}
                        required
                        placeholder={"Enter Store Name"}
                        defaultValue={getFunName()}/>
                    <button type={"submit"}>Visit Store</button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;
