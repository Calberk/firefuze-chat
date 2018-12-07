import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllMessages} from '../actions'
import {Field, reduxForm} from 'redux-form';
import Input from './input';

class Chat extends Component {

    componentDidMount(){
        if(!localStorage.getItem('chat_name')){
            return this.props.history.push('/set-name')
        }


        this.props.getAllMessages();
    }

    handleMessage = ({message}) =>{
        console.log('send message', message);
    }

    render(){

        // console.log('message', this.props.messages)
        const {messages, handleSubmit} = this.props;

        const messageElements = Object.keys(messages).map(key=>{
            const msg = messages[key];
        
            return (
                <li key={key} className='collection-item'>
                    <b>{msg.name}: </b>{msg.message}
                </li>
            )
        })
        console.log('messageselements', messageElements)

        return(
            <div>
                <div className="right-align grey-text">Logged in as: {localStorage.getItem('chat_name')}</div>
                <h1 className="center">Chat Room</h1>
                <ul className="collection">
                    {messageElements}
                </ul>
                <form onSubmit={handleSubmit(this.handleMessage)}>
                    <div className="row">
                        <Field name='message' label='Message' component={Input}/>
                    </div>
                </form>
            </div>
        )
    }
}


function mapStateToProps (state){
    return {
        messages: state.chat.messages
    }
}

const validate = ({message}) => message ? {} : {message: 'Please enter a message'};

export default reduxForm({
    form: 'new-message',
    validate
})(connect(mapStateToProps, {
    getAllMessages
})(Chat));