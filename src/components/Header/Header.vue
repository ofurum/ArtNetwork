<template>
  <div class="head">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light ">
       <span  class="image"><svg
        xmlns="http://www.w3.org/2000/svg"
        width="26.307"
        height="33.307"
        viewBox="0 0 26.307 26.307"
      >
        <path
          class="a"
          fill="white"
          d="M13.154,0a13.154,13.154,0,0,0,0,26.307,2.189,2.189,0,0,0,2.192-2.192,2.143,
        2.143,0,0,0-.57-1.469A2.2,2.2,0,0,1,16.42,19H19a7.31,7.31,0,0,0,7.308-7.308C26.307,5.232,20.417,
        0,13.154,0ZM5.115,13.154a2.192,2.192,0,1,1,2.192-2.192A2.189,2.189,0,0,1,5.115,13.154ZM9.5,
        7.308a2.192,2.192,0,1,1,2.192-2.192A2.189,2.189,0,0,1,9.5,7.308Zm7.308,0A2.192,2.192,0,1,1,19,
        5.115,2.189,2.189,0,0,1,16.807,7.308Zm4.385,5.846a2.192,2.192,0,1,1,2.192-2.192A2.189,
        2.189,0,0,1,21.192,13.154Z"
        />
      </svg><h3 style="color:white" class="text">ARTNETWORK</h3></span>
         
      
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon "></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ">
           
          </ul>
                <div class="menu navbar-nav " >
                  <ul class="menu-1">
          <router-link
            to="/Login"
            style="text-decoration: none; color: inherit;"
            class="route"
            ><li class="log-in text-center text-light">Log In</li></router-link
          >
          <router-link
            to="/SignUp"
            style="text-decoration: none; color: inherit;"
            class="route"
            ><li class="sign-up text-center text-light">
              Sign Up
            </li></router-link
          >
        </ul>
      </div>
        </div>
      </nav>
    </header>

    <div class="header-2 ">
      <span>
        <div class="item"><strong>ART IS ALL THAT</strong></div>
        <div class="item" id="matters"><strong>MATTERS</strong></div>
      </span>
    </div>
    <!-- <div class="search-box p-3">
            <nav class="navbar navbar-light">
        <form class="form-inline">
           <input class="form-control mr-sm-2 rounded-pill search-1" type="search" placeholder="Search" aria-label="Search">
           <div class="search-2">
               <div class="btn btn my-2 my-sm-0 bg-danger rounded " type="submit">Username</div>
           <div class="btn btn my-2 my-sm-0" type="submit">FORM OF ART</div>
           <div class="btn btn my-2 my-sm-0" type="submit">PIECE NAME</div>
           </div>
          </form>
        </nav>
        </div> -->
  </div>
</template>

<style scoped>
.head {
  padding: 5px;
  background: url("~@/assets/img/header-bg.png");
  background-size: cover;
  font-family: "poppins";
  letter-spacing: 1px;
}
.image {
  display: flex;
}


.text {
  font-family: "GlacialIndifferenceRegular";
  font: bold;
  
}

li {
  list-style: none;
  display: inline-block;
}
.log-in {
  margin: 5px;
  background: #fd012a 25% 25% no-repeat padding-box;
  padding: 15px;
  border-radius: 5px;
  height: 50px;
  width: 130px;
  color: #ffff;
  opacity: 1;
}
.nav{
    display: block;
}
.sign-up {
  background: #300f14 0% 0% no-repeat padding-box;
  padding: 15px;
  border-radius: 5px;
  height: 50px;
  width: 130px;
  color: #ffff;
  opacity: 1;
}
.header-2 {
  display: flex;
  justify-content: center;
  height: 150px;
}
#matters {
  font-size: 60px;
  margin-left: 4px;
}
.item {
  display: inline-block;
  vertical-align: middle;
  color: #ffffff;
}
.search-box {
  background: #ffff;
  width: 80%;
  margin-left: 10%;
  margin-right: 25%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 300px;
  box-shadow: 14px 14px 25px #0000000d;
}
.search-1 {
  background: #1010100d;
  text-align: right;
  margin-right: 40px;
}
.search-2 {
  background: #a6ada61a;
}
.burger {
  display: none;
}
.burger-1 {
  display: none;
}
#toggle {
  display: none;
}
@media only screen and (max-width: 500px) {
.head {
  background: url("~@/assets/img/header-bg.png");
  background-size: auto;
  background-repeat: no-repeat;
  font-family: "poppins";
  letter-spacing: 1px;

}
.menu{
    display: block;
}
  .text {
    font-size: 1.3em;
    font-family: "GlacialIndifferenceRegular";
    font: bold;
  }
  .header-2{
      margin-top: 4px;
  }

  .item {
    display: flex;
    justify-content: center;
    font-size: 1em;
    
  }
 .nav{
     display: block;
 }
}
</style>

<script></script>
