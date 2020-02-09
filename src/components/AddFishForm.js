import React from 'react';

class AddFishForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event => {
        event.preventDefault();
        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value
        };
        this.props.addFish(fish);
        // Refresh the form
        event.currentTarget.reset();
    };
    render() {
        return(
            <form className={"fish-edit"} onSubmit={this.createFish}>
                <input ref={this.nameRef} name="name" type={"text"} placeholder="Name"/>
                <input ref={this.priceRef} name="price" type={"text"} placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value={"available"}>Fresh!</option>
                    <option value={"unavailable"}>Sold out!</option>
                </select>
                <textarea name="desc" placeholder="Desc" ref={this.descRef}/>
                <input name="image" type={"text"} placeholder="Image" ref={this.imageRef}/>
                <button type={"submit"}>+ ADD FISH</button>
            </form>
        )
    }
}

export default AddFishForm;
