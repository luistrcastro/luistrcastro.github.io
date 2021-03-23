<template>
  <div>
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <div class="cart-icon elevation-6">
          <v-badge left color="primary">
            <span slot="badge">{{cart.length}}</span>
          </v-badge>
          <v-icon v-bind="attrs" v-on="on" class="cart">mdi-cart</v-icon>
        </div>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in cart" :key="index">
          <v-avatar size="40">
            <img :src="`${item.foto}`" />
          </v-avatar>
          <v-list-item-title>{{ item.nome }} ({{item.desconto? item.desconto : item.preco | price}})</v-list-item-title>
          <v-btn color="error" elevation="0" x-small @click="removeItem(index)">X</v-btn>
        </v-list-item>
        <v-list-item>
          <strong>Total:</strong>
          <v-spacer></v-spacer>
          {{cartTotal | price}}
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: ["cart"],
  data() {
    return {};
  },

  methods: {
    removeItem(index) {
      this.cart.splice(index, 1);
    }
  },

  computed: {
    cartTotal() {
      if (!Array.isArray(this.cart)) {
        return 0;
      }

      return this.cart.reduce(
        (total, item) => total + (item.desconto ? item.desconto : item.preco),
        0
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  color: white;
}
.cart-icon {
  position: fixed;
  top: 90px;
  right: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
  float: right;
  background-color: #1976d2;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
</style>
