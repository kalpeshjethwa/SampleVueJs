<template>
    <div class="container">
        <h1 class="text-center">User List</h1>
        <table class="table table-striped">
            
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>PhoneNumber</th>
            </thead>
            <tbody>
                
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.address }}</td>
                    <td>{{ user.phonenumber }}</td>
                </tr>
            </tbody>
        
        </table>
    </div>
</template>
<script>


import axios from "axios";
  export default {
    name: "UserList",
    data() {
      return {
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