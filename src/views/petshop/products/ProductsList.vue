<template>
  <v-container>
    <v-row>
      <v-card
        v-for="(product, index) in products"
        :key="index"
        class="mx-auto mb-4"
        max-width="344"
      >
        <router-link :to="`/ecommerce/${product.id}`">
          <v-img :src="`${product.foto}`" height="200px">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="green lighten-2"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </router-link>

        <v-card-title>{{ product.nome }}</v-card-title>
        <v-card-text v-if="product.desconto" class="d-flex justify-end">
          <span class="discount mr-3">{{ product.preco | price }}</span>
          <span>{{ product.desconto | price }}</span>
        </v-card-text>
        <v-card-text v-else class="d-flex justify-end">
          <span>{{ product.preco | price }}</span>
        </v-card-text>
        <v-card-subtitle class="description">{{
          product.descricao
        }}</v-card-subtitle>

        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" @click="addToCart(product)">COMPRAR</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import Services from "../../components/Services";

export default {
  props: ["products"],
  extends: Services
};
</script>

<style scoped>
.description {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.discount {
  text-decoration: line-through;
}
</style>
