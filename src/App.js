import React, {Component} from 'react';
import {connect} from 'react-redux';
import {input} from './actions/inputUpdateAction';
import {inputCleaner} from './actions/inputUpdateAction';
import {addContact} from './actions/tasksAction';

import './App.css';
import ToDoList from './Components/ToCreateList/ToCreateList'

class App extends Component {

    state = {
        isOpened: false,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        dateOfBirth: '',
    };

    inputHandler = (event) => {
        event.preventDefault();
        const {name, value} = event.target
        this.setState({[name]: value})
    };

    openModal = () => {
        this.setState({openModal: true})
    }

    closeModal = () => {
        this.setState({openModal: false})
    }

    onSubmit = (e) => {
        const {firstName, lastName, phoneNumber, emailAddress, dateOfBirth} = this.state
        const newContact = {
            firstName,
            lastName,
            phoneNumber,
            emailAddress,
            dateOfBirth,


        }
        this.props.addContactToStore(newContact)
    }

    render() {
        return (
            <div className='container'>
                <div className='container__form'>
                    <h1 className='header'>Create User Card</h1>
                    {this.state.openModal && <form onSubmit={this.inputHandler}>
                        {/* стилизовать под крестик */}
                        <label>
                            <option>First Name</option>
                            <input className='input' onChange={this.inputHandler} type="text" name='firstName'
                                   value={this.state.firstName}
                            />
                        </label>
                        <label>
                            <option>Last Name</option>
                            <input className='input' onChange={this.inputHandler} type="text" name='lastName'
                                   value={this.state.lastName}/>
                        </label>
                        <label>
                            <option>Phone Number</option>
                            <input className='input' onChange={this.inputHandler} type="text" name='phoneNumber'
                                   value={this.state.phoneNumber}/>
                        </label>
                        <label>
                            <option>Email Address</option>
                            <input className='input' onChange={this.inputHandler} type="text" name='emailAddress'
                                   value={this.state.emailAddress}/>
                        </label>
                        <label>
                            <option>Date of Birth</option>
                            <input className='input' onChange={this.inputHandler} type="text" name='dateOfBirth'
                                   value={this.state.dateOfBirth}/>
                        </label>
                        <button className='container__btn' onClick={this.onSubmit}>Submit</button>
                        <button className='container__btn' onClick={this.closeModal}>Cancel</button>
                    </form>}
                    <button className='container__btn' onClick={this.openModal} type='submit'>Open</button>
                </div>
                <ToDoList/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        input: state.input,
        inputsArr: state.inputsArr
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addContactToStore: (contact) => {
            dispatch(addContact(contact))
        },
        // addInput: function(value) {
        //     dispatch(addTask(value))
        // },
        inputCleaner: function () {
            dispatch(inputCleaner())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
