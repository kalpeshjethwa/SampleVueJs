<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">USERS</p>
            </div>
        </div>
        <form>
                <div class="col-mt-7">
                    <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" id="id" placeholder="Search Id" v-model="id">
                    
                    </div>
                    <div class="col">
                         <router-link :to="`/getUser/${id}`" >
                        <input type="submit"  class="btn btn-outline-dark ">
                        </router-link>
                    </div>
                </div>

                </div>

            </form>
    </div>
    <div class="container mt-3" >
        <div class="row">
            <div class="col-md-6" v-for="user in users" :key="user.id">
                <div class="card">
                    <div class="card  mb-3 my-2 list-group-item-success">
                        <div class="card-body">
                            <div class="row" align-item-center>
                            <div class="col-sm-8" align-item-center>
                                <ul class="list-group">
                                <li class="list-group-item">Id:<span font-weight-bold>{{user.id}}</span></li>
                                <li class="list-group-item">Name:<span fw-bold>{{user.name}}</span></li>
                                <li class="list-group-item">Number:<span fw-bold>{{user.phonenumber}}</span></li>
                            </ul>


                            </div>
                            <div class="col-sm-2">
                                <img src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" alt="" class="user-img">
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import axios from "axios";
  export default {
    name: "HomeView",
    data() {
      return {
        id:"",
        users: undefined,
      };
    },
    async created() {
      try {
        const res = await axios.get(`http://localhost:8080/api/getAllUser`);
        this.users = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  };
</script>

<style scoped>

</style>