<template>
    <div class="contentButton">
        <button type="button" class="btn btn-danger" v-bind:class="{classButton:isGreen}" @click="myFunction"><span>{{titleButton}}</span></button>
    </div>
</template>

<script>
export default {
  name: 'monButton',
  props: ['titleButton', 'colorButton', 'type', 'isGreen'],
  methods: {
    myFunction: function() {
      this.$emit(this.type);
      this.$emit(this.titleButton);
      this.$emit(this.colorButton);
    },
  }
}
</script>

<style scoped>

.contentButton {
  transform:skew(-27deg);
  font-family: 'Lato';
  width:320px; /* Changes hidden right position if you change this width */
  /* float:left; */
  margin:20px;
}

.classButton {
    display:block;
    position: relative; 
    background: #41B883 none repeat scroll 0 0;
    border: 1px solid rgb(11, 82, 22);
    max-width: 100%;
    overflow:hidden; /* Delete this line to see the sliding divs hidden */
    padding: 25px 204px 25px 30px;
    cursor:pointer;
}

.classButton:hover::after {
    background: #fff;
    /* background: #23aad3; */
    right: -1200px;
}

.classButton::after {
    content: "";
    position:absolute;
    transition: all ease 0.3s;
    background:#41B883;
    height: 800%;
    margin: -5px 0 0 -5px;
    right: -1670px;
    top: 0px;
    transform: rotate(120deg);
    transform-origin: 0 0 0;
    width: 280%;
}

.classButton span {
    transform:skew(27deg);
    color: #FFF;
    display: block;
    position: relative;
    text-align: left;
    z-index: 2;
}
.classButton:hover span {
  color:#41B883;
}
</style>