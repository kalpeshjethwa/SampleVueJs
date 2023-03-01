import axios from "axios"

export default class UserService{
    static serverURL=`http://localhost:8080/api`

    static getAllUser(){
        let dataUrl=`${this.serverURL}/getAllUser`
        return axios.get(dataUrl)

    }
     static getUser(id){
        let dataUrl=`${this.serverURL}/getUser/${id}`
        return axios.get(dataUrl)

    }
}