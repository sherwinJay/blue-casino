<template>
  <div class="header-container">
    <header>
      <div class="row">
        <div class="col-md-4">
          <h1 class="logo">
            <img src="/images/Logo.png">
          </h1>
        </div>
        <div class="col-md-8 form-container">
          <form>
            <input type="text" placeholder="username">
            <input type="password" placeholder="password">
            <button>Login</button>
            <button class="register-btn">Register</button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>
<style scoped>
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

}
.header-container header .logo{
    font-size: 28px;
    font-weight: bold;
    color: #fff;
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
}
</style>
