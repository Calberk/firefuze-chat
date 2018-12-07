import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllMessages} from '../actions'

class Chat extends Component {

    componentDidMount(){
        this.props.getAllMessages();
    }

    render(){

        console.log('message', this.props.messages)
        const {messages} = this.props;

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
                <h1 className="center">Chat Room</h1>
                <ul className="collection">
                    {messageElements}
                </ul>
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        messages: state.chat.messages
    }
}

export default connect(mapStateToProps, {
    getAllMessages
})(Chat);