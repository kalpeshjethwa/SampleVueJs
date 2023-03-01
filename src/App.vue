<template>
  
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand"><h3>&nbsp;&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/getAllUser" class="nav-link"><h3>GetAllUser&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h3></router-link>
        </li>
        
      </div>
    </nav>
   
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>


export default {
    name: "app",
    
};
</script>