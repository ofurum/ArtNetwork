<template>
  <div class="body">
    <!-- that that the art  wallpaper -->
    <div class="first-part">
      <div class="row part-way ">
        <div class="col-lg-3 first-part-1">
          <div class="part-1 p-5">
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
            <h2 class="text-light title">
              <router-link
                to="/"
                style="text-decoration: none; color: inherit;"
                >{{ title }}</router-link
              >
            </h2>
          </div>
          <div class="sub-head">
            <div class="item text-grey"><strong>ART IS ALL THAT</strong></div>
            <div class="item text-grey" id="matters"><strong>MATTERS</strong></div>
          </div>
        </div>

        <!-- form reg part -->
        <div class="col-9-sm p-5">
          <b-container>
            <div class="form-heading">
              <div>
                <h1>Create your profile</h1>
              </div>
              <div>
                <p>Enter your details to create your profile</p>
              </div>
            </div>
            <div class="form-registration">
              <div class="input-1 mb-5">
                <b-form inline>
                  <label class="sr-only" for="inline-form-input-name"
                    >Name</label
                  >
                  <b-input
                    id="inline-form-input-name"
                    class="mb-2 mr-sm-2 mb-sm-0 "
                    placeholder="Firstname"
                  ></b-input>

                  <label class="sr-only" for="inline-form-input-username"
                    >Username</label
                  >
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0 ">
                    <b-input
                      id="inline-form-input-username"
                      placeholder="Lastname"
                    ></b-input>
                  </b-input-group>
                </b-form>
              </div>
              <div class="input-2 mb-5">
                <b-form inline>
                  <label class="sr-only" for="inline-form-input-name"
                    >Name</label
                  >
                  <b-input
                    id="inline-form-input-name"
                    class="mb-2 mr-sm-2 mb-sm-0 "
                    placeholder="Email"
                  ></b-input>

                  <label class="sr-only" for="inline-form-input-username"
                    >Username</label
                  >
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0 ">
                    <b-input
                      id="inline-form-input-username"
                      placeholder="Phone Number"
                    ></b-input>
                  </b-input-group>
                </b-form>
              </div>
              <div class="input-3">
                <b-form inline>
                  <label class="sr-only" for="inline-form-input-name"
                    >Name</label
                  >
                  <b-input
                    id="inline-form-input-name"
                    class="mb-2 mr-sm-2 mb-sm-0 "
                    placeholder="Usernme"
                  ></b-input>

                  <label class="sr-only" for="inline-form-input-username"
                    >Password</label
                  >
                  <b-input-group class="mb-2 mr-sm-2 mb-sm-0 ">
                    <b-input
                      id="text-password"
                      placeholder="Password"
                    ></b-input>
                  </b-input-group>
                </b-form>
              </div>

              
              <div class="mt-5">{{ select.type }}</div>
              <div class="radio mt-2">
                <div class="form-check form-check-inline form-1 btn btn">
                  <input
                    class="form-check-input ff"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Artist</label
                  >
                </div>
                <div class="form-check form-check-inline form-2 btn btn">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Gallery</label
                  >
                </div>
                <div class="form-check form-check-inline btn btn form-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                  />
                  <label class="form-check-label" for="inlineRadio3"
                    >Collector</label
                  >
                </div>
              </div>
            </div>
            <div class="sign-up mt-3">
              <button type="button" class="button rounded">Sign Up</button>
            </div>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.body {
  margin: 0px;
  padding: 0px;
  font-family: 'poppins', sans-serif;
}
.first-part-1 {
  background: url("~@/assets/img/signup.png");
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
.part-1 {
  display: flex;
}
.row {
  margin: 0px;
}
.sub-head {
  align-self: center;
  position: absolute;
  top: 45%;
}
#matters {
  font-size: 30px;
}
.form-1 {
  background: #fd012a1a;
  color: #fd012a;
}
.form-2 {
  background: #fd012a1a;
  color: #fd012a;
}
.form-3 {
  background: #fd012a1a;
  color: #fd012a;
}
/* .form-1 :hover{
    background: #FD012A;
} */
.button {
  background: #300f14;
  padding: 10px;
  color: #fff;
  letter-spacing: 0px;
  position: absolute;
  margin: auto;
}
@media only screen and (max-width: 500px){
.first-part-1{
  background-repeat: no-repeat;
  background-size: cover;
  height: 40vh;

}
.title{
  font-size: 1.5em;
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
      select: {
        type: "select your user type",
      },
    };
  },
};
</script>
