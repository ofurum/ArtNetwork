<template>
  <div class="body">
    <div class="row">
      <div class="col-4 part-1-1">
        <div class="part-1 p-3 ">
          <span class="svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :width="width"
              :height="height"
              viewBox="0 0 26.307 26.307"
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
          <h4 class="text-black">
            <router-link
              to="/"
              style="text-decoration: none; color: inherit;"
              >{{ title }}</router-link
            >
          </h4>
        </div>
        <div class="message-text text-center border-bottom mt-3">
            <div class="mb-5"><strong>{{ message }}</strong></div>
        </div>
        <div class="message-box mt-3">
            <div class="chat-box ml-3">
               <span class="dot ml-3"></span>
               <div class="rose ml-3">
               <h5>ROSEVELLE STUDIO</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Recusandae, eius labore.
                </p>
               </div>
            </div>
            <div class="chat-box ml-3 mt-2">
               <span class="dot ml-3"></span>
               <div class="rose ml-3">
               <h5>ROSEVELLE STUDIO</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Recusandae, eius labore.
                </p>
               </div>
            </div>
            <div class="chat-box ml-3 mt-2">
               <span class="dot ml-3"></span>
               <div class="rose ml-3">
               <h5>ROSEVELLE STUDIO</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Recusandae, eius labore.
                </p>
               </div>
            </div>

        </div>
      </div>
      <div class="col-8 sub-1">
        <div class="container mt-3">
              <div class="heading">
                  <span><strong>RETURN TO HOME</strong></span>
         <div class="part-2 offset-sm-6">
            <div class="notificaton">
              <span><i class="far fa-bell fa-1x">|</i></span>
            </div>
            <div class="username">
              <span>
                <p>username</p>
              </span>
            </div>
            <div class="user">
              <span class="svg">
                <router-link to="/UploadMedia" style="text-decoration: none; color: inherit;">Log In</router-link>
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
            <div>
               <router-link to="/Message" style="text-decoration: none; color: inherit;"><i class="fas fa-envelope fa-1x" ></i></router-link>
            </div>
          </div>
              </div>
          </div>
            <div class="conversation mt-5">
              <div class="box-1 offset-sm-6">
                 <p class="p-3 lo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere unde fugit iste exercitationem cupiditate iusto voluptas nobis veniam non animi dolor, 
                     dicta saepe itaque delectus laudantium voluptatibus rem? Quae, 
                     possimus.
                </p>
              </div>
              <div class="row">
                  <div class=" col-5 box-2 box-2 ml-2">
                 <p class="lo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere unde fugit iste exercitationem cupiditate iusto voluptas nobis veniam non animi dolor, 
                     dicta saepe itaque delectus laudantium voluptatibus rem? Quae, 
                     possimus.</p>
              </div>
              </div>
               <div class="box-1 offset-sm-6 ">
                 <p class="p-3 lo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere unde fugit iste exercitationem cupiditate iusto voluptas nobis veniam non animi dolor, 
                     dicta saepe itaque delectus laudantium voluptatibus rem? Quae, 
                     possimus.
                    </p>
              </div>
              <div class="row">
                  <div class="col-5 box-2 ml-2">
                 <p class="lo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere unde fugit iste exercitationem cupiditate iusto volup, 
                     possimus.
                     </p>
              </div>
              </div>
      </div>
      
      </div>
    </div>
  </div>
</template>

<style scoped>
.part-1 {
  display: flex;
  justify-content: center;
}
.part-1-1{
    background: url("~@/assets/img/message.svg");
    height: 100vh;
}
.message-text{
    color: #FD012A ;
    letter-spacing: 2px;
    opacity: 1;
    font-family: 'poppins', serif;
}
.dot {
  height: 70px;
  width: 70px;
  background-color: #FD012A;
  border-radius: 50%;
  display: inline-block;
}
.chat-box{
    display: flex;
    background: #fff;
    padding: 10px;
}
.rose{
    font-size: 10px;
}
.heading{
    display: flex;
}
.part-2{
    display: flex;
    background: #FD012A;
}
.sub-1{
     background: transparent url("~@/assets/img/message-1.svg");
}
.box-1{
    background: #FD012A;
    border-radius: 15px;
}
.box-2{
    background: #300F14;
    color: #fff;
    padding: 10px;
    border-radius: 15px;
}
.lo{
    font-size: 10px;
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
      default: 33.307,
    },
    iconColor: {
      type: String,
      default: "Black",
    },
  },
  data() {
    return {
      title: "ARTNETWORK",
      message: "YOUR MESSAGES"
    };
  },
};
</script>
