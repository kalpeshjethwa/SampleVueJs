<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">USERS</p>
            </div>
           
        </div>
        
       
    </div>
   
    <div v-if = "user !== null" class="container mt-5">
        <div class="col-md-7">
        <div class="card">
                    <div class="card  mb-3 my-2 list-group-item-success">
        <div class="row" align-item-center>
            <div class="col-md-7">
                <ul class="list-group">
                                <li class="list-group-item " >Id:<span fw-weight-bold>{{user.id}}</span></li>
                                <li class="list-group-item mt-3">Name:<span fw-bold>{{user.name}}</span></li>
                                <li class="list-group-item mt-3">Address:<span fw-bold>{{user.address}}</span></li>
                                <li class="list-group-item mt-3">Number:<span fw-bold>{{user.phonenumber}}</span></li>
                </ul>
            </div>
                <div class="col-md-2">
                                <img src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" alt="" class="user-img-big">
                </div>
            
        </div>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
//import UserService  from "../services/UserService.js"
import axios from "axios";

export default{
    name:"FindUser",
    
    data:function(){
        return {
            id:this.$route.params.id,
            user:{}

        }
    },
    
    created:async function(){
            try {
        const res = await axios.get(`http://localhost:8080/api/getUser/${this.id}`);
        console.log(res)
        this.user = res.data;
      } catch (error) {
        console.log(error);
      }
        }
    
}
</script>
