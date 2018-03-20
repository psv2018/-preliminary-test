import React, { Component } from 'react';
import './App.css';
import './participants.css';
import ParticipantsItem from './ParticipantsItem'
import AddParticipant from './AddParticipant'

const participants = [{
  id:1,
  name:'bob',
  email:'bob@gmail.com',
  phonenumber:'04554548887',
}]

localStorage.setItem('participants',JSON.stringify(participants));

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      participants : JSON.parse(localStorage.getItem('participants'))    
    };
    this.deleteEntry = this.deleteEntry.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.editSubmit = this.editSubmit.bind(this);
  }

  componentWillMount(){
    const participants = this.getParticipants();  
    this.setState({participants});
  }

  getParticipants(){
    //console.log(participants);
    return this.state.participants; 
   }
  
  addEntry(id,name,email,phonenumber){
    //console.log(id +" "+ " name"+" "+email+" "+phonenumber);
    const participants = this.getParticipants();
    if(participants.length<20){

     let  isError = false;       
      const  filteredParticipants = participants.filter(participant=>{
        return participant.id==id;
      });

      if(filteredParticipants.length > 0){
        isError = true;
      }

      if(email.indexOf("@")===-1){
        isError = true;  
      } 

      console.log(isError, filteredParticipants.length);

      if(!isError){
      participants.push({
        id,name,email,phonenumber
      });
      this.setState(participants);
      }
    }
   }
  deleteEntry(id){
    console.log(id);
    const participants = this.getParticipants();
    const  filteredParticipants = participants.filter(participant=>{
      return participant.id !=id;
    }); 
    console.log(filteredParticipants);
    this.setState({participants:filteredParticipants});
  }

  editSubmit(id,name,email,phonenumber,orginalid){
    console.log(id +" "+ " name"+" "+email+" "+phonenumber);
    let participants = this.getParticipants();
    if(participants.length<20){

      let  isError = false; 
        const  filteredParticipants = participants.filter(participant=>{
        return participant.id==id;
      });
      
      if(filteredParticipants.length==1){
        isError = false;
      }

      if(email.indexOf("@")===-1){
        isError = true;  
      } 

      console.log("####",isError,filteredParticipants.length);
      if(!isError){
        participants = participants.map(participant =>{
          if(participant.id===orginalid){
            //participant.id = id;
            participant.name=name;
            participant.email=email;
            participant.phonenumber=phonenumber;
          }
          return participant;
        });
      this.setState({participants});
    }
  }
  }
  render() {
    return (
      <div className="App">
       <div id="contentId">
       <div id="header">Nord Software</div> 
       <div id="main">
       <table>
       <table><tr class="emptyCell">&nbsp;</tr></table>  
       <table>
        <thead>
          <tr>
            <th class="move-left" colspan="4"><h2>List of participants</h2></th>
          </tr>
        </thead>
              
        { /* Add the  Participant entry here */ }
        <AddParticipant addEntry={this.addEntry}
        />
               
      </table>
      <table><tr class="emptyCell">&nbsp;</tr></table>

      <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th colspan="2">Phone number</th>
        </tr>
      </thead>
      
       { /* Generate the participant entry here */ }
       {
         this.state.participants.map(participant => {
           return (
            (participant.id != null && participant.id > 0) ? 
            (<ParticipantsItem
            key={participant.id}
            {...participant}
            /*id={participant.id}
            name={participant.name}
            email={participant.email}
            phonenumber={participant.phonenumber}*/
            deleteEntry={this.deleteEntry}
            editSubmit={this.editSubmit}
            />):<p/>
           )
         })
       }
       </table>
       </table> 
       </div> 
      </div> 
      </div>
    );
  }
}
export default App;
