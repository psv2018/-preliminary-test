import React, { Component } from 'react';
import './participants.css';

class ParticipantsItem extends Component {
    constructor(props){
        super(props);

        this.state = {
         isEditEnabled : false 
        };

        this.deleteEntry = this.deleteEntry.bind(this);
        this.editEntry = this.editEntry.bind(this);
        this.editSubmit = this.editSubmit.bind(this);
    }

    deleteEntry(){
        const{deleteEntry,id} = this.props;
        this.props.deleteEntry(this.props.id);
    }

    editEntry(){
        this.setState({ isEditEnabled : true});
    }

    editSubmit(event){
        event.preventDefault();
        this.props.editSubmit(this.idInput.value,
            this.nameInput.value,
            this.emailInput.value,
            this.phoneNumberInput.value,this.props.id);
            this.setState({isEditEnabled:false});
    }

   render() {
     const {id,name,email,phonenumber} = this.props; 
    return (
        <tbody class="tbc">
           { 
            this.state.isEditEnabled
            ? (
                <tr>
                <td><input type="number" placeholder="Id" ref={idInput=>this.idInput=idInput} defaultValue={id} /></td>   
                <td><input type="text" placeholder="Name" ref={nameInput=>this.nameInput=nameInput} defaultValue={name}/></td>   
                <td><input type="email" placeholder="Email" ref={emailInput=>this.emailInput=emailInput} defaultValue={email}/></td>   
                <td><input type="number" placeholder="PhoneNumber" ref={phoneNumberInput=>this.phoneNumberInput=phoneNumberInput} defaultValue={phonenumber}/></td>   
                <td><input type="button" onClick={this.editSubmit} value="Save"/></td>
                </tr>   
               )
            :(
            <tr>
                 <td>{id}</td>	
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>{phonenumber}</td>
                 <td>
                  <i class="material-icons button edit" onClick={this.editEntry}>edit</i>
                   <i class="material-icons button delete" onClick={this.deleteEntry}>delete</i>
                 </td>
            </tr>          
            )
            }
       </tbody>    
        
    );
  }
}

export default ParticipantsItem;
