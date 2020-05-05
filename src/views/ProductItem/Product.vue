<template>
  <div>
    <div class="search-box p-3">
      <nav class="navbar navbar-light">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2 rounded-pill search-1"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="search-2">
            <div class="btn btn my-2 my-sm-0 bg-danger rounded " type="submit">
              Username
            </div>
            <div class="btn btn my-2 my-sm-0" type="submit">FORM OF ART</div>
            <div class="btn btn my-2 my-sm-0" type="submit">PIECE NAME</div>
          </div>
        </form>
      </nav>
    </div>
    <!-- product part -->
    <b-container>
      <div class="dropdown mt-5">
        <div class="dropdown-1">
          <b-dropdown
            id="dropdown-1"
            text="Collections"
            variant="#FD012A"
            class="m-md-5  dropdown-1-1"
          >
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
        </div>
        <div class="dropdown-2">
          <b-dropdown
            id="dropdown-2"
            text="Filter"
            variant="primary"
            class="m-md-5"
          >
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-item>Second Action</b-dropdown-item>
            <b-dropdown-item>Third Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item active>Active action</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
      <h2>PICKS OF THE DAY</h2>
      <!-- cards-section -->
      <div class="cards mt-5">
        <b-row>
          <b-col>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
           <b-col>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
           <b-col>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <h2 class="mt-5">ALL UPDATES</h2>
      <div class="mt-5">
           <b-row>
           <b-col>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
           <b-col>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
           <b-col>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
          
      </b-row>
      <b-row>
           <b-col>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
           <b-col>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
           <b-col>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>

              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          </b-col>
      </b-row>
      </div>
      <div class="gallery-part-2 mb-5 mt-5">
        <span><h3 class="mb-3">DIGITAL ARTISTS</h3></span>
          <div class="row">
            <div class="col">
              <div class="card" style="width: 18rem;">
                <div class="card-body card-1">
                  
                 
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style="width: 18rem;">
                <div class="card-body  card-2">
                  
                 
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style="width: 18rem;">
                <div class="card-body card-3">
                  
                 
                </div>
              </div>
            </div>
          </div>
          <div class="gallery-part-2 mb-5 mt-5">
          <div class="row">
            <div class="col">
              <div class="card" style="width: 18rem;">
                <div class="card-body card-1">
                  
                 
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style="width: 18rem;">
                <div class="card-body  card-2">
                  
                 
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style="width: 18rem;">
                <div class="card-body card-3">
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

    </b-container>
  </div>
</template>

<style scoped>
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
.dropdown {
  display: flex;
}

.dropdown-2 {
  margin-left: auto;
}
.dropdown-1-1 {
  background: #fd012a;
  color: #f8f9fa !important;
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
</style>
