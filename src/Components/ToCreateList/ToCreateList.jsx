import React from 'react';
import { connect } from 'react-redux';
import ToDo from '../ToCreate/ToCreate';
import './ToCreateList.css'


const ToCreateList = (props)=>
  (
    <ul className='list'>{props.contacts.map((el => <ToDo firstName={el.firstName} lastName={el.lastName}  phoneNumber={el.phoneNumber} emailAddress={el.emailAddress} dateOfBirth={el.dateOfBirth} id={el.id} key={el.id} isActive={el.isActive}/>))}</ul>
  );

function mapStateToProps (state) {
    return {
      contacts: state.contacts,
    }
}

export default connect(mapStateToProps) (ToCreateList);
