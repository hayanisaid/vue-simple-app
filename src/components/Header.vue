<template>
  <div>
    <nav>
      <ul>
        <li><router-link to='/home'>Home</router-link></li>
        <li><router-link to='/admin'>Admin</router-link></li>
        <li>
          <button class="add_post" v-on:click="openModal()">add post</button>
        </li>
      </ul>
    </nav>


   
  <div class="modal" v-show="isModalActivated">
        <span class="modalClose" v-on:click="openModal">X</span>
        <transition name="fadeIn">
            <keep-alive>
        <div class="modalContainer">
            <div class="modal-header">
              <h3>Add Article</h3>
            </div>
            <div class="modal-body">
                   <form action="">
                       <div class="input-group">
                           <label for="title">Title</label>
                           <input type="text" placeholder="Type Title" class="form-control">
                       </div>

                        <div class="input-group">
                           <label for="author">Author</label>
                           <input type="text" placeholder="Author" class="form-control">
                       </div>
                           <div class="input-group">
                           <label for="author">Image</label>
                           <input type="text" placeholder=" http:://your-image.jpg" class="form-control">
                       </div>

                        <div class="input-group">
                           <label for="title">Content</label>
                            <textarea name="content" id="" cols="30" rows="10"></textarea>
                       </div>
                       <button class="submit-btn">Submit</button>
                   </form>
            </div>
        </div>
        </keep-alive>
         </transition>
    </div>
  

  
  </div>
</template>

<script>

export default {
  name: 'Header',
  data(){
      return{
          isModalActivated:false
      }
  },
  methods:{
      openModal(){
          this.isModalActivated=(this.isModalActivated=== true)?false:true
          console.log('open modal')
      }
  }
};
</script>
<style scoped>

.modal{
    width: 100%;
    height: 100%;
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    background: #141010a3;
    z-index: 1;
}
.modalContainer{
    background: #fff;
    width: 34em;
    height: auto;
    margin: 3em auto;
    padding: 10px;
    position: relative;
    transition: .3s ease-in;
}
.modalContainer .modal-header{
    text-align: center;
    font-family: "Raleway",
}
.modal .modalClose{
    position: absolute;
    font-size: 3em;
    color: #f4f4f4;
    right: 72px;
    top: 39px;
    cursor: pointer;
}
.modalContainer .modal-header h3{
    font-family: "Raleway";
    font-size: 1em;
    margin: .5em;
    color: #666;
}

.input-group{}
.input-group label{
    color: #666;
    margin:10px;
    font-size: 14px;
    color: #005792;
        font-family: "Open Sans";
        margin-bottom: 2em;
        font-weight: bold;
        color: #666;
} 
.submit-btn{
    width: 100%;
    height: 3em;
    padding: 5px;
    background: #c00000;
    color:#f4f4f4;
     font-family: "Open Sans";
     font-size: 1em;
     
}
.input-group .form-control{
    width: 100%;
    height: 3em;
    padding: 1em;
    border: 1px solid #efefef;
    color: #888;
    margin-bottom: 1em;
    font-family: "Raleway";
    margin-top: .5em;
    }
    .input-group .form-control::placeholder{
       font-family: "Raleway",  
    }
    .input-group textarea{
       width: 100%;
    padding: 1em;
    height: 7em;;
    border: 1px solid #efefef;
    color: #888;
    margin-bottom: 1em;
     margin-top: .5em;
    font-family: "Raleway",
    }
    .fadeIn-enter-active{
     animation: scaleIn 3s linear;
    }
      .fadeIn-enter{
     animation: scaleIn 3s linear;
    }
      .fadeIn-leave-active{
          animation: scaleOut 3s linear;
    }

    @keyframes scaleIn{
        0%{
            transform: scale(0)
        }
        50%{
            transform: scale(0.5)
        }
         100%{
            transform: scale(1)
        }
    }
</style>
