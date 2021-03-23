<template>
  <div>
    <div class="grid">
      <div class="card">
        <reception v-on:newClient="newClient"></reception>
      </div>
      <div>
        <div class="card">
          <veterinary
            v-bind:clients="VetClients"
            @served="finishVet"
          ></veterinary>
        </div>
        <div class="card">
          <bath :clients="BathClients" @served="finishBath"></bath>
        </div>
      </div>
    </div>
    <v-spacer></v-spacer>
    <div class="row">
      <v-col sm="12">
        <v-card class="pa-4">
          <balanco :clients="ServedCustomers"></balanco>
        </v-card>
      </v-col>
    </div>
  </div>
</template>

<script>
import Reception from "@/components/petshop/Reception";
import Veterinary from "@/components/petshop/Veterinary";
import Bath from "@/components/petshop/Bath";
import Balanco from "@/components/petshop/Balanco";

export default {
  components: {
    Reception,
    Veterinary,
    Bath,
    Balanco
  },
  data() {
    return {
      VetClients: [],
      BathClients: [],
      ServedCustomers: []
    };
  },
  methods: {
    newClient(client) {
      client.servico.tipo === "banho"
        ? this.BathClients.push(client)
        : this.VetClients.push(client);
    },
    finishVet(client) {
      this.ServedCustomers.push(client);
      // retirar um item da lista ou VetClients e renderizar o componente
      this.$delete(
        this.VetClients,
        this.VetClients.findIndex(served => served.nome === client.nome),
        client
      );
    },
    finishBath(client) {
      this.ServedCustomers.push(client);
      // retirar um item da lista BathClients e renderizar o componente
      this.$delete(
        this.BathClients,
        this.BathClients.findIndex(served => served.nome === client.nome),
        client
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.grid {
  display: grid;
  grid-template-columns: 50% 50%;
}

.row {
  display: flex;
}

.card {
  border: black 1px solid;
}
</style>
