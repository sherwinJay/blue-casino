<template>
  <div class="header-container">
    <header>
      <!-- <div class="menu-wrapper">
        <a href="#" class="menu">
          <img src="/images/sideNav/menu.svg" alt="menu">
        </a>
      </div> -->
      <div class="logo-wrapper">
        <h1 class="logo">
          <img src="/images/Logo.png" alt="logo">
        </h1>
      </div>
      <div class="form-container">
        <a href="#" class="user-mob">
          <img src="/images/user-silhouette.svg" alt="user">
        </a>
        <form>
          <label><input type="text" placeholder="username"></label>
          <label><input type="password" placeholder="password"></label>
          <button>Login</button>
          <button class="register-btn">Register</button>
        </form>
      </div>
    </header>
  </div>
</template>
<style scoped>
.header-container header .form-container .user-mob,
.menu-wrapper{
  display: none;
}
.header-container{
    position: relative;
    min-height: 63px;
    margin-left: 220px;
}
.header-container header{
    background-color: #0c1929;
    padding: 5px 40px 5px 240px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
}
.header-container header .logo-wrapper{
  grid-column-start: 1;
  grid-column-end: 3;
  justify-items: start;
  align-items: center;
}
.header-container header .form-container{
  justify-items: end;
}
.header-container header .logo{
    font-size: 28px;
    font-weight: bold;
    color: #fff;
    display: grid;
}
.header-container header form{
  display: flex;
  justify-content: flex-end;
}
.header-container form input,
.header-container form button{
  margin: 0 3px;
  border-radius: 15px;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  outline: none;
}
.header-container form input{
  padding: 5px 10px;
}
.header-container form button{
  padding: 5px 14px;
  background-image: linear-gradient(to bottom right, #e8b238 15%, #fdea7f 50%, #e8b238 90%) !important;
}
.header-container form button.register-btn{
background-image: linear-gradient(to bottom right, #afafaf 15%, #efefef 50%, #aeaeae 90%) !important;
}
.header-container header .row{
  align-items: center;
}
.logo img{
  height: 60px;
}
@media(max-width: 1120px){
  .header-container header{
    padding: 5px 40px;
  }
  .menu-wrapper{
    display: block;
  }
  .form-container form{
    display: none !important;
  }
  .header-container header .menu-wrapper{
    grid-column-start: 1;
    grid-column-end: 2;
    justify-items: start;
    align-items: center;
  }
  .header-container header .form-container .user-mob img,
  .header-container header .menu-wrapper img{
    width: 30px;
  }
  .header-container header .logo-wrapper{
    grid-column-start: 2;
    grid-column-end: 3;
  }
  .header-container header .logo{
    justify-items: center;
  }
  .header-container header .form-container .user-mob{
    display: grid;
    justify-items: end;
  }
}
</style>
