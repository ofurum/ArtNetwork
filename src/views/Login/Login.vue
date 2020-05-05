<template>
  <div class="body">
    <!-- that that the art  wallpaper -->
    <div class="first-part">
      <div class="row">
        <div class="col-4 first-part-1">
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
            <h2 class="text-light">
              <router-link
                to="/"
                style="text-decoration: none; color: inherit;"
                >{{ title }}</router-link
              >
            </h2>
          </div>
          <div class="sub-head">
            <div class="item text-white"><strong>ART IS ALL THAT</strong></div>
            <div class="item" id="matters"><strong>MATTERS</strong></div>
          </div>
        </div>

        <!-- form reg part -->
        <div class="col-8 p-5">
          <h1 class="text-center mb-5">{{profile.name}}</h1>
          <div class="form-part">
          <form @submit.prevent="handleSubmit">
                 <div class="form-group text-center">
                                <label for="email" >Email</label>
                                <input type="email" v-model="user.email" id="email" name="email" class="form-control form-g-1" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.email.required">Email is required</span>
                                    <span v-if="!$v.user.email.email">Email is invalid</span>
                                </div>
                  </div>
                  <div class="form-group text-center mt-5">
                                <label for="password">Password</label>
                                <input type="password" v-model="user.password" id="password" name="password" class="form-control form-g-2" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Password is required</span>
                                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                                </div>
                   </div>
                    <div class="form-group text-center mt-5">
                                <button class="btn btn-dark"><router-link to="/HomePage" style="text-decoration: none; color: inherit;">Log In</router-link></button>
                      </div>
          </form>
        </div>
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
.form-g-1{
  background:  #A6ADA626;
}
.form-g-2{
  background:  #A6ADA626;
}

</style>

<script>
 import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
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
      title: "ARTWORK",
      profile: {
          name: 'Welcome Back!!!'
      },
      user: {
        email: "",
        password:"",
      },
      submitted: false
    };
  },
  validations: {
            user: {
                email: { required, email },
                password: { required, minLength: minLength(6) },
            }
        },
   methods: {
            handleSubmit(e) {
                this.submitted = true;

                // stop here if form is invalid
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
            }
        }     
};
</script>
