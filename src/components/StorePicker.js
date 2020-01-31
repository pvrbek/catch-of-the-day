import React, {Fragment} from "react";

class StorePicker extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Main</h1>
                <form className={"store-selector"}>
                    <h2>Enter A Store</h2>
                    <input type={"text"} required placeholder={"Enter Store Name"}></input>
                    <button type={"submit"}>Visit Store</button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;
