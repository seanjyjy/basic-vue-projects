<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to=".modals" v-if="showModal">
    <ModalComponent theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Testing world</h1>
      <p>Wonderful it is working</p>
    </ModalComponent>
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <ModalComponent @close="toggleModalTwo">
      <h1>Testing world123123</h1>
      <p>Wonderful it is working123123</p>
    </ModalComponent>
  </teleport>
  <button @click="toggleModal">open modal</button>
  <button @click="toggleModalTwo">open modal</button>
</template>

<script>
import ModalComponent from "../components/ModalComponent.vue";
export default {
  components: { ModalComponent },
  data() {
    return {
      title: "Hello World",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
.modals {
  text-align: center;
  color: #2c3e50;
}
</style>
