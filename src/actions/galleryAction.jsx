
import API from '../constants/api'
import axios from 'axios'
import {LIST_ARTICLE} from "../constants/actionType";


export function fetchGallery() {
    return (dispatch,getState)=>{
      return new Promise((resolve,reject)=>{
        axios.get(API.GALLERY).then(res=>{
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



  // axios.post('url',{username:'username',password:'sdsdsd'},{headers:{'token':'adadhusd232'}})