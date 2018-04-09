import React, { Component } from 'react';

class FormOne extends Component {

    // create refs for form
    nameInput = React.createRef();
    surnameInput = React.createRef();
    formRef = React.createRef();

    saveToState = (e) => {
        e.preventDefault();
        // const stateToAdd = {
        //     name: this.nameInput.current.value,
        //     surname: this.surnameInput.current.value,
        // };
        const { name, surname } = this.formRef.current.elements;
        const stateToAdd = {
            name: name.value,
            surname: surname.value,
        };
        console.dir(stateToAdd);
    }
    
    render() {
        return (
            <form ref={this.formRef} onSubmit={this.saveToState}>
                <label htmlFor="name">Name</label>
                <input type="text" ref={this.nameInput} name="name"/>
                <label htmlFor="surname">Surname</label>
                <input type="text" ref={this.surnameInput} name="surname"/>
                <button type="submit">submit</button>
            </form>
        );
  }
}

export default FormOne;