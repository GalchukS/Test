import React, {Component} from 'react';
import {connect} from 'react-redux';
import {input} from '../../actions/inputUpdateAction';
import {deleteTask, editTask, isActive} from '../../actions/tasksAction';
import {read, change} from '../../actions/editFielsAction';
import Button from '../Button/Button';
import './ToCreate.css'


class ToCreate extends Component {

    removeContact = () => {
        this.props.delContact(this.props.id)
    };

    editContact = () => {
        this.props.editTaskFunc(this.props.id, this.props.editField);
        this.update();
    };

    update = () => {
        this.props.isActiveToggle(this.props.id);
    };

    readValue = () => {
        this.props.read(this.props.text);
        this.update();
    };

    changeValue = (e) => {
        this.props.change(e.target.value);
    };

    render() {
        console.log('id', this.props.id);
        return (
            this.props.isActive ?
                <div>
                    <li className='task' id={this.props.id}>
                        <input className='input' onChange={this.changeValue} type="text" value={this.props.editField}
                               name='input'/>
                        <p>{this.props.firstName}</p>
                        <p>{this.props.lastName}</p>
                        <p>{this.props.phoneNumber}</p>
                        <p>{this.props.emailAddress}</p>
                        <p>{this.props.dateOfBirth}</p>
                        <div>
                            <Button onClick={this.editContact()} text='Save'/>
                            <Button onClick={this.update} text='Cancel'/>
                        </div>
                    </li>
                </div>
                :
                <div>
                    <li className='task' id={this.props.id}>
                        <p>First name<br/>{this.props.firstName}</p>
                        <p> Last name<br/>{this.props.lastName}</p>
                        <p>Phone number<br/>{this.props.phoneNumber}</p>
                        <p>Email address<br/>{this.props.emailAddress}</p>
                        <p>Date of birth<br/>{this.props.dateOfBirth}</p>
                        <div>
                            <Button onClick={this.readValue} text='Edit'/>
                            <Button onClick={this.removeContact} text='Delete'/>
                        </div>
                    </li>
                </div>
        )
    }
}

function MSTP(state) {
    return {
        editField: state.editField,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        delContact: (id) => {
            dispatch(deleteTask(id))
        },
        editTaskFunc: function (id, input) {
            dispatch(editTask(id, input))
        },
        isActiveToggle: function (id) {
            dispatch(isActive(id));
        },

        read: function (text) {
            dispatch(read(text))
        },

        change: function (text) {
            dispatch(change(text))
        }
    }
}

export default connect(MSTP, mapDispatchToProps)(ToCreate);
