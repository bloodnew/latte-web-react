
import API from '../constants/api'
import axios from 'axios'
import {LIST_ARTICLE} from "../constants/actionType";


export function fetchArticle() {
    return (dispatch,getState)=>{
      return new Promise((resolve,reject)=>{
          axios.get(API.ARTICLE).then(res=>{
            dispatch({
                type:LIST_ARTICLE,
                payload:res.data
            })
              resolve(res.data)
          }).catch(err=>{
            reject(err)
          })
      })

    }
  }