import { saveInfo } from '../commoneItems/commen'
import data from './userData.json'

const dummyApi = (user) => {
    if(data[user]){
        return Promise.resolve(data[user].role)
    }else{
        return Promise.reject("Login faled")
    }
}

const login = (user) => {
    return dummyApi(user).then(role=>{
        saveInfo({user, role})
        return {
            status : "success",
            data : role
        }
    })
}

export {
    login
}