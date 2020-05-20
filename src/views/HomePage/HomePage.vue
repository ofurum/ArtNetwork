<template>
  <div class="body">
    <div class="header ">
      <div class="container">
        <div class="row part-1">
          <div class="svg-part">
            <span class="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                :width="width"
                :height="height"
                viewBox="0 0 26.307 20.307"
                :aria-labelledby="iconName"
              >
                <path
                  class="a"
                  :fill="iconColor"
                  d="M13.154,0a13.154,13.154,0,0,0,0,26.307,2.189,2.189,0,0,0,2.192-2.192,2.143,
                                        2.143,0,0,0-.57-1.469A2.2,2.2,0,0,1,16.42,19H19a7.31,7.31,0,0,0,7.308-7.308C26.307,5.232,20.417,
                                        0,13.154,0ZM5.115,13.154a2.192,2.192,0,1,1,2.192-2.192A2.189,2.189,0,0,1,5.115,13.154ZM9.5,
                                        7.308a2.192,2.192,0,1,1,2.192-2.192A2.189,2.189,0,0,1,9.5,7.308Zm7.308,0A2.192,2.192,0,1,1,19,
                                        5.115,2.189,2.189,0,0,1,16.807,7.308Zm4.385,5.846a2.192,2.192,0,1,1,2.192-2.192A2.189,
                                        2.189,0,0,1,21.192,13.154Z"
                />
                <title :id="iconName" lang="en">{{ iconName }} icon</title>
                <g :fill="iconColor">
                  <slot />
                </g>
              </svg>
            </span>
            <h2 class="text-light tittle">
              <router-link
                to="/"
                style="text-decoration: none; color: inherit;"
                >{{ title }}</router-link
              >
            </h2>
          </div>
          <div class="part-2 text-white">
            <div class="notificaton m-2">
              <span><i class="far fa-bell fa-1x "></i></span>
            </div>
            <div class="username m-2">
              <span>
                <p>username</p>
              </span>
            </div>
            <div class="user m-2">
              <span class="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :width="width"
                  :height="heigth"
                  viewBox="0 0 26.307 20.307"
                  :aria-labelledby="iconName"
                >
                  <path
                    class=" a"
                    d="M13.842,19.47a6.511,6.511,0,0,0-6.5,6.5v.622a12.893,12.893,0,0,0,12.953,0q0-.311,0-.622A6.511,6.511,0,0,0,13.842,19.47Z"
                    transform="translate(-1.028 -2.667)"
                  />
                  <path
                    class="b"
                    d="M21.921,3.767A12.823,12.823,0,1,0,3.787,21.9a11.589,11.589,0,0,0,1.079.976A8,8,0,0,1,9.823,15.9a5.587,5.587,0,1,1,6.045,0,8.022,8.022,0,0,1,4.957,6.977A14.292,14.292,0,0,0,21.9,21.9a12.823,12.823,0,0,0,0-18.134Z"
                    transform="translate(-0.031 -0.011)"
                  />
                  <path
                    class="a"
                    d="M18.309,12.355a4.085,4.085,0,1,0-4.085,4.085,4.085,4.085,0,0,0,4.085-4.085Z"
                    transform="translate(-1.411 -1.138)"
                  />
                  <title :id="iconName" lang="en">{{ iconName }} icon</title>
                  <g :fill="iconColor">
                    <slot />
                  </g>
                </svg>
              </span>
            </div>
            <section class="m-2">
                 <router-link to="/UploadMedia" style="text-decoration: none; color: inherit;"><i class="fas fa-upload "></i></router-link>
            </section>
            <div class="m-2">
               <router-link to="/Message" style="text-decoration: none; color: inherit;"><i class="fas fa-envelope fa-1x fa-fw" ></i></router-link>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 offset-md-3 text-center text-white mt-5 mb-5 rider ">
            Picasso Rider Art
          </div>
        </div>
        <div class="row sub-head w-60">
          <div class="col-md-6 offset-md-3 mt-5 mb-5">
            <div class="row">
              <div class="col-md-2">
                <span class="flex justify-">
                  <img
                    src="https://images.unsplash.com/photo-1540304801084-0944beb20de7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    alt="profile_pic"
                    class="rounded-circle profile"
                  />
                </span>
              </div>
              <div class="col-md-4 text-center">
                <span class="">
                  <p><strong>TINU ABOLUWARIN</strong></p>
                  <p class="text-mute"></p>
                </span>
              </div>
              <div class="col-md-2 contact mr-2 mt-3">
                <span class="text-center">
                  <p class="text-center">Contact List</p>
                </span>
              </div>
              <div class="col-md-2 contact mt-3">
                <span class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :width="width"
                    :height="height"
                    viewBox="0 0 26.307 20.307"
                    :aria-labelledby="iconName"
                  >
                    <g transform="translate(0)">
                      <g transform="translate(0)">
                        <path
                          class="a"
                          :fill="iconWhite"
                          d="M24.409,17.06a17.28,17.28,0,0,0-2-.8,9.031,9.031,0,1,0-10.814.006A17.274,17.274,0,0,0,.087,29.134,4.035,4.035,0,0,0,4.031,34H20.387a1.328,1.328,0,0,0,0-2.656H4.031a1.35,1.35,0,0,1-1.062-.505,1.387,1.387,0,0,1-.281-1.163,14.674,14.674,0,0,1,13.961-11.62q.175.007.352.007t.356-.007a14.467,14.467,0,0,1,5.913,1.4,1.328,1.328,0,0,0,1.14-2.4ZM17.324,15.4,17,15.4q-.161,0-.321,0a6.375,6.375,0,1,1,.645,0Z"
                          transform="translate(0)"
                        />
                      </g>
                      <g transform="translate(21.383 21.383)">
                        <path
                          class="a"
                          :fill="iconWhite"
                          d="M333.289,326.98h-3.652v-3.652a1.328,1.328,0,0,0-2.656,0v3.652h-3.652a1.328,1.328,0,0,0,0,2.656h3.652v3.652a1.328,1.328,0,0,0,2.656,0v-3.652h3.652a1.328,1.328,0,0,0,0-2.656Z"
                          transform="translate(-322 -322)"
                        />
                      </g>
                    </g>
                    <title :id="iconName" lang="en">{{ iconName }} icon</title>
                    <g :fill="iconWhite">
                      <slot />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="second-part mt-5 mb-5">
        <div class="gallery-part">
          <div class="gallery">
            <h3>GALLERY</h3>
          </div>
          <div class="divider"></div>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
        <div class="gallery-part-2 mb-5 mt-5">
          <div class="row ml-5-md">
            <div class="col mt-3-md">
              <div class="card " style="width: 18rem;">
                <div class="card-body card-1">
                  
                 
                </div>
              </div>
            </div>
            <div class="col mt-3">
              <div class="card" style="width: 18rem;">
                <div class="card-body  card-2">
                  
                 
                </div>
              </div>
            </div>
            <div class="col mt-3">
              <div class="card" style="width: 18rem;">
                <div class="card-body card-3">
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body{
  font-family: 'poppins', bold;
}
.header {
  background: url("~@/assets/img/HomePage-header.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.svg-part {
  display: flex;
}
.part-2 {
  display: flex;
  background: #fd012a;
  margin-left: auto;
  justify-content: space-around;
}
.profile {
  position: relative;
  height: 10vh;
}
.sub-head {
  background: white;
  margin: 5px;
  box-shadow: 14px 14px 25px #0000000d;
  position: relative;
  bottom: -30px;
}
.contact {
  background: #fd012a;
  height: 8vh;
  border-radius: 5px;
  color: #ffff;
  display: flex;
}

.gallery-part {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 100px;
}
.gallery {
  flex-grow: 0;
  margin-right: 10px;
}
.divider {
  flex-grow: 1;
  height: 1px;
  background-color: #9f9f9f;
}
.rider{
   font-size: 4em;
}
.dot {
  height: 35px;
  width: 35px;
  background-color: #fd012a;
  border-radius: 50%;
  display: inline-block;
  margin-left: 4px;
}
.card-1{
   background: url("~@/assets/img/card-1.png");
   height: 50vh;
}
.card-2{
  background: url("~@/assets/img/card-2.png");
  height: 50vh;
}
.card-3{
    background: url("~@/assets/img/card-3.png");
    height: 50vh;
}

@media only screen and (max-width: 500px) {
  
  .tittle{
    font-size:1em;
    padding: 6px;
    font: bolder;
  }
}
</style>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "palatte",
    },
    width: {
      type: [Number, String],
      default: 26.307,
    },
    height: {
      type: [Number, String],
      default: 35.307,
    },
    iconColor: {
      type: String,
      default: "Black",
    },
    iconWhite: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      title: "ARTNETWORK",
    };
  },
};
</script>
