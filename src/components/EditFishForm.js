import React from 'react';

class EditFishForm extends React.Component {
    handleChange = (event) => {
        // console.log(event.currentTarget.value);
        //Update fish
        const updatedFish = {
            ...this.props.fishes,
            [event.currentTarget.name]: event.currentTarget.value //Computed property names
        };
        this.props.updateFish(this.props.index, updatedFish);
    };

    render() {
        return (
            <div className={"fish-edit"}>
                <input type={"text"} name={"name"} onChange={this.handleChange} value={this.props.fishes.name}/>
                <input type={"text"} name={"price"} onChange={this.handleChange} value={this.props.fishes.price}/>
                <select name={"status"} onChange={this.handleChange} value={this.props.fishes.status}>
                    <option value={"available"}>Fresh!</option>
                    <option value={"unavailable"}>Sold out!</option>
                </select>
                <textarea name={"desc"} onChange={this.handleChange} value={this.props.fishes.desc}/>
                <input type={"text"} name={"image"} onChange={this.handleChange} value={this.props.fishes.image}/>
            </div>
        )
    }
}

export default EditFishForm;
