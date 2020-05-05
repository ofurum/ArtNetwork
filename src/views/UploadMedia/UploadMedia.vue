<template>
  <div class="body">
    <!-- that that the art  wallpaper -->
    <div class="first-part">
      <div class="row">
        <div class="col-3  first-part-1">
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
            <div class="item-1 text-white"><strong> WHERE ART IS ALL THAT</strong></div>
            <div class="item-2" id="matters"><strong>MATTERS</strong></div>
          </div>
        </div>

        <!-- form reg part -->
        <div class="col-9 p-5">
          <b-container>
            <div class="form-heading">
              <div>
                <h1 class="upload-media">Upload Media</h1>
              </div>
              <div>
              <strong> <p>Artwork 1</p> </strong>
              </div>
            </div>
            <div class="art-name mb-3">
              <label>Artwork Name</label>
              <br />
              <input type="text" name="" id="" class="art-input" />
            </div>
            <div class="upload mb-3">
              <label>Upload Media</label>
              <br />
              <input type="text" name="" id="" class="art-input" />
            </div>
            <div>
              <span>More Artwork Details</span>
              <div>
                <span>
                  <label class="breadth"> <strong>Breadth:</strong></label>
                  <input type="text" name="" id="" class="width-input"/>
                </span>
                <br />
                <span>
                  <label class="width"> <strong>Width:</strong></label>
                  <input type="text" name="" id="" class="width-input"/>
                </span>
              </div>
            </div>
            <div>
              <label>Enter Tags (separate them with commas)</label><br />
              <input type="text" name="" id="" class="art-input"/>
            </div>
            <div class="mt-3">
             <div class="mb-3">
               <span >Select Status</span>
               </div> 
              <div class="button">
                <div class="dropdown drop">
                  <a
                    class="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    For sale
                  </a>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                   <button class="btn btn-primary submit" type="submit">Upload</button>
                </div>
              </div>
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
.upload-media{
  font-family: 'poppins';
}
.row {
  margin: 0px;
}
.sub-head {
  align-self: center;
  position: absolute;
  top: 45%;
}
.item-1{
  font-family:'Poppins' ;
  font-size: medium 30px/46px;
  opacity: 1;
}
#matters {
  font-size: 30px;
}

.art-input {
  width: 45%;
  border-radius: 5px;
  background: #A6ADA626;
}
.breadth {
  width: 15%;
  color: #FD012A;
}
.width {
  width: 15%;
  color: #FD012A;
  font: Bold;
}
.button {
  display: flex;
}
.width-input{
    width: 30%;
    border-radius: 5px;
    background: #A6ADA626;
}

.submit{
  margin-left: 10px;
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
      title: "ARTWORK",
    };
  },
};
</script>
