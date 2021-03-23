<template>
  <v-container>
    <div class="alert-div">
      <v-alert
        max-width="277px"
        class="alert"
        :value="alert"
        dense
        type="success"
      >Item adicionado ao carrinho!</v-alert>
    </div>
    <cart :cart="cart"></cart>
    <router-view :products="products" @addToCart="addToCart"></router-view>
  </v-container>
</template>

<script>
import axios from "axios";
import Cart from "../components/Cart";

export default {
  components: { Cart },
  data() {
    return {
      products: [],
      cart: [],
      alert: false
    };
  },

  async created() {
    try {
      this.products = await this.doFetchProducts();
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    async doFetchProducts() {
      const { data } = await axios.get("http://localhost:3000/produtos");
      return data;
    },

    addToCart(product) {
      this.cart.push(product);
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 2000);
    }
  }
};
</script>

<style lang="scss" scoped>
.alert-div {
  display: flex;
  justify-content: center;
}
.alert {
  position: fixed;
  top: 80px;
  z-index: 2;
}
</style>
