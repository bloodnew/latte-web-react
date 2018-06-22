
import API from '../constants/api'
import axios from 'axios'

import {LIST_EVENT} from '../constants/actionType'

export function fetchEvent() {
    return (dispatch,getState) => {
        return new Promise( (resolve,reject) => {
            axios.get(API.EVENT).then( res => {
                dispatch({
                    type:LIST_EVENT,
                    payload:res.data
                })
                resolve(res.data)
            }).catch( err => {
                reject(err)
            })
        })
    }

  }