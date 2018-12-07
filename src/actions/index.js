import types from './types'
import {db} from '../firebase'

export function getAllMessages(){
    return async function(dispatch){
        db.ref('/messages').on('value', (snapshot) => {
            // console.log('DB Snapshot', snapshot.val())

            dispatch({
                type: types.GET_CHAT_MESSAGES,
                messages: snapshot.val()
            })
        });
    }
}

