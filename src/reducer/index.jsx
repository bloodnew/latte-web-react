import eventReducer from './eventReducer'
import articleReducer from './articleReducer'
import galleryReducer from './galleryReducer'
import {combineReducers} from 'redux'
import {IntlReducer as Intl} from 'react-redux-multilingual'

export default combineReducers({
    Intl,
    eventReducer,
    articleReducer,
    galleryReducer
})