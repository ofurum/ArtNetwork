.search-box{
    background: #ffff;
    width: 80%;
    margin-left: 10%;
    margin-right: 25%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 300px;
    box-shadow: 14px 14px 25px #0000000D;
}
.search-1{
    background: #1010100D;
    text-align: right;
    margin-right: 40px;
}
.search-2{
    background:#A6ADA61A ;
}

<svg xmlns="http://www.w3.org/2000/svg" width="26.307" height="33.307" viewBox="0 0 26.307 26.307">
        <path class="a" fill ="white" d="M13.154,0a13.154,13.154,0,0,0,0,26.307,2.189,2.189,0,0,0,2.192-2.192,2.143,
        2.143,0,0,0-.57-1.469A2.2,2.2,0,0,1,16.42,19H19a7.31,7.31,0,0,0,7.308-7.308C26.307,5.232,20.417,
        0,13.154,0ZM5.115,13.154a2.192,2.192,0,1,1,2.192-2.192A2.189,2.189,0,0,1,5.115,13.154ZM9.5,
        7.308a2.192,2.192,0,1,1,2.192-2.192A2.189,2.189,0,0,1,9.5,7.308Zm7.308,0A2.192,2.192,0,1,1,19,
        5.115,2.189,2.189,0,0,1,16.807,7.308Zm4.385,5.846a2.192,2.192,0,1,1,2.192-2.192A2.189,
        2.189,0,0,1,21.192,13.154Z"/>  
        </svg>

         <b-row>
                     <b-col cols = "4">
                         <div class="part-1">
                            <span class="svg">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     :width="width"
                                     :height="height"
                                     viewBox="0 0 26.307 26.307"
                                     :aria-labelledby="iconName"
                                   >
                                    <path class="a" :fill="iconColor" 
                                    d="M13.154,0a13.154,13.154,0,0,0,0,26.307,2.189,2.189,0,0,0,2.192-2.192,2.143,
                                        2.143,0,0,0-.57-1.469A2.2,2.2,0,0,1,16.42,19H19a7.31,7.31,0,0,0,7.308-7.308C26.307,5.232,20.417,
                                        0,13.154,0ZM5.115,13.154a2.192,2.192,0,1,1,2.192-2.192A2.189,2.189,0,0,1,5.115,13.154ZM9.5,
                                        7.308a2.192,2.192,0,1,1,2.192-2.192A2.189,2.189,0,0,1,9.5,7.308Zm7.308,0A2.192,2.192,0,1,1,19,
                                        5.115,2.189,2.189,0,0,1,16.807,7.308Zm4.385,5.846a2.192,2.192,0,1,1,2.192-2.192A2.189,
                                        2.189,0,0,1,21.192,13.154Z"
                                    />  
                                <title
                                    :id="iconName"
                                    lang="en"
                                >{{ iconName }} icon</title>
                                <g :fill="iconColor">  
                                 <slot />
                                 </g>
                             </svg>
                            </span> 
                           <h2>{{title}}</h2>
                         </div>
                     </b-col>
                     <b-col cols="8">
                          <h1>dddcdcdc</h1>
                     </b-col>
                 </b-row>

 export default {
        name: "app",
        data() {
            return {
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                },
                submitted: false
            };
        },
        validations: {
            user: {
                firstName: { required },
                lastName: { required },
                email: { required, email },
                password: { required, minLength: minLength(6) },
                confirmPassword: { required, sameAsPassword: sameAs('password') }
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



    <svg xmlns="http://www.w3.org/2000/svg" width="25.628" height="25.672" viewBox="0 0 25.628 25.672"><defs><style>
    .a{fill:#300f14;}.b{fill:#fff;}</style></defs>
    <path class="
    a" d="M13.842,19.47a6.511,6.511,0,0,0-6.5,6.5v.622a12.893,12.893,0,0,0,12.953,0q0-.311,0-.622A6.511,6.511,0,0,0,13.842,19.47Z" transform="translate(-1.028 -2.667)"/><path class="b" d="M21.921,3.767A12.823,12.823,0,1,0,3.787,21.9a11.589,11.589,0,0,0,1.079.976A8,8,0,0,1,9.823,15.9a5.587,5.587,0,1,1,6.045,0,8.022,8.022,0,0,1,4.957,6.977A14.292,14.292,0,0,0,21.9,21.9a12.823,12.823,0,0,0,0-18.134Z" transform="translate(-0.031 -0.011)"/><path class="a" d="M18.309,12.355a4.085,4.085,0,1,0-4.085,4.085,4.085,4.085,0,0,0,4.085-4.085Z" transform="translate(-1.411 -1.138)"/>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" 
    viewBox="0 0 34 34"><defs><style>.a{fill:#fff;}</style>
    </defs><g transform="translate(0)"><g transform="translate(0)">
    <path class="a" d="M24.409,17.06a17.28,17.28,0,0,0-2-.8,9.031,9.031,
    0,1,0-10.814.006A17.274,17.274,0,0,0,.087,29.134,4.035,4.035,0,0,0,4.031,34H20.387a1.328,
    1.328,0,0,0,0-2.656H4.031a1.35,1.35,0,0,1-1.062-.505,1.387,1.387,0,0,1-.281-1.163,14.674,
    14.674,0,0,1,13.961-11.62q.175.007.352.007t.356-.007a14.467,14.467,0,0,1,5.913,1.4,1.328,
    1.328,0,0,0,1.14-2.4ZM17.324,15.4,17,15.4q-.161,0-.321,0a6.375,6.375,0,1,1,.645,0Z" 
    transform="translate(0)"/></g><g transform="translate(21.383 21.383)">
    <path class="a" d="M333.289,326.98h-3.652v-3.652a1.328,1.328,0,0,0-2.656,0v3.652h-3.652a1.328,1.328,0,0,0,0,2.656h3.652v3.652a1.328,1.328,0,0,0,2.656,0v-3.652h3.652a1.328,1.328,0,0,0,0-2.656Z" transform="translate(-322 -322)"
    />
    </g>
    </g>
    </svg>




    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"><defs><style>.a{fill:#fff;}</style></defs><g transform="translate(0)"><g transform="translate(0)">
    <path class="a" d="M24.409,17.06a17.28,17.28,0,0,0-2-.8,9.031,9.031,0,1,0-10.814.006A17.274,17.274,0,0,0,.087,29.134,4.035,4.035,0,0,0,4.031,34H20.387a1.328,1.328,0,0,0,0-2.656H4.031a1.35,1.35,0,0,1-1.062-.505,1.387,1.387,0,0,1-.281-1.163,14.674,14.674,0,0,1,13.961-11.62q.175.007.352.007t.356-.007a14.467,14.467,0,0,1,5.913,1.4,1.328,1.328,0,0,0,1.14-2.4ZM17.324,15.4,17,15.4q-.161,0-.321,0a6.375,6.375,0,1,1,.645,0Z" transform="translate(0)"/>
    </g><g transform="translate(21.383 21.383)">
    <path class="a" d="M333.289,326.98h-3.652v-3.652a1.328,1.328,0,0,0-2.656,0v3.652h-3.652a1.328,1.328,0,0,0,0,2.656h3.652v3.652a1.328,1.328,0,0,0,2.656,0v-3.652h3.652a1.328,1.328,0,0,0,0-2.656Z" 
    transform="translate(-322 -322)"/>
    </g></g>
    </svg>