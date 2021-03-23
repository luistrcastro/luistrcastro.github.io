<template>
  <v-container>
    <v-row>
      <v-card>
        <v-img :src="`${product.foto}`" height="200px">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="green lighten-2"></v-progress-circular>
            </v-row>
          </template>
        </v-img>

        <v-card-title>{{product.nome}}</v-card-title>
        <v-card-text v-if="product.desconto" class="d-flex justify-end">
          <span class="discount mr-3">{{product.preco | price}}</span>
          <span>{{product.desconto | price}}</span>
        </v-card-text>
        <v-card-text v-else class="d-flex justify-end">
          <span>{{product.preco | price}}</span>
        </v-card-text>
        <v-card-subtitle>{{product.descricao}}</v-card-subtitle>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary">COMPRAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      product: [],
      id: 0
    };
  },
  created() {
    this.id = this.products.findIndex(
      product => product.id === this.$route.params.id
    );
    this.product = this.products[this.id];
  },
  mounted() {}
};
</script>

<style>
</style>
