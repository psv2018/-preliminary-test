import React, { Component } from 'react';
import './participants.css';

class AddParticipant extends Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.addEntry(this.idInput.value,
                        this.nameInput.value,
                        this.emailInput.value,
                        this.phoneNumberInput.value);
    this.idInput.value='';
    this.nameInput.value='';
    this.emailInput.value='';
    this.phoneNumberInput.value='';                        
  }

   render() {
    return (
      <tbody class="tbc">
        <tr>
        <td><input type="number" placeholder="Id" ref={idInput=>this.idInput=idInput} /></td>   
        <td><input type="text" placeholder="Name" ref={nameInput=>this.nameInput=nameInput}/></td>
        <td><input type="email" placeholder="Email" ref={emailInput=>this.emailInput=emailInput}/></td>
        <td><input type="number" placeholder="PhoneNumber" ref={phoneNumberInput=>this.phoneNumberInput=phoneNumberInput}/></td>
        <td><input type="button" onClick={this.onSubmit} value="Add new"/></td>
        </tr>
      </tbody>
    );
  }
}

export default AddParticipant;
