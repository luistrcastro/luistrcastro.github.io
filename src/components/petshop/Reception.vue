<template>
  <div>
    <v-form @submit.prevent="newClient">
      <h1>Bem-vindo ao Petshop</h1>
      <v-spacer></v-spacer>
      <v-text-field v-model="client.nome" name="name" label="Nome do cliente" id="id"></v-text-field>
      <v-spacer></v-spacer>
      <v-select :items="breeds" item-text="nome" v-model="client.raca" label="Raça do animal"></v-select>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="client.idade"
        :rules="[rules.canineAge]"
        type="number"
        name="age"
        label="Idade"
        id="age"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-select :items="services" v-model="client.servico" label="Serviço">
        <template v-slot:selection="data">{{data.item.nome}}</template>
        <template v-slot:item="data">{{data.item.nome}} ({{data.item.preco | price}})</template>
      </v-select>
      <v-spacer></v-spacer>
      <v-textarea
        label="Sintomas"
        name="sintomas"
        rows="3"
        v-if="client.servico && client.servico.tipo === 'consulta'"
        v-model="client.servico.observacoes"
      ></v-textarea>
      <v-btn
        color="success"
        type="submit"
        :disabled="
            client.idade >= 30 ||
              client.idade < 0 ||
              client.raca.length === 0 ||
              client.servico.tipo.length === 0 ||
              client.nome.length === 0
          "
      >Cadastrar</v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
import Dog from "../../models/dog";
// import Vue from "vue";

export default {
  data() {
    return {
      client: new Dog(),
      breeds: [],
      services: [],
      rules: {
        canineAge: value => value < 30 || "Tem certeza dessa idade?"
      }
    };
  },

  async created() {
    try {
      this.breeds = await this.doFetchBreeds();
      this.services = await this.doFetchServices();
    } catch (error) {
      console.log(error);
    }
  },

  mounted() {},

  methods: {
    async doFetchBreeds() {
      const { data } = await axios.get("http://localhost:3000/racas");
      return data;
    },

    async doFetchServices() {
      const { data } = await axios.get("http://localhost:3000/servicos");
      return data;
    },

    async newClient() {
      const setClient = this.client;
      this.$emit("newClient", setClient);
      this.client = new Dog();
      // Vue.set(this.services[2].obervacoes, _, "");
      this.services = await this.doFetchServices();
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 15px;
}

.erro {
  color: red;
}
// input[type="text"] {
//   padding: 6px;
// }
</style>
