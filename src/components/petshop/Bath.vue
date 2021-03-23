<template>
  <div>
    <h3>Fila do Banho</h3>
    <v-simple-table v-if="clients.length > 0">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Tosa?</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(client, index) in clients" :key="index">
          <td>{{ client.nome }}</td>
          <td>{{ client.idade }}</td>
          <td>{{ client.raca }}</td>
          <td>{{ client.servico.extra | question }}</td>
          <td>
            <v-btn
              elevation="2"
              color="primary"
              x-small
              v-on:click="finishService(client)"
              >Finalizar Serviço</v-btn
            >
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <p v-else>Nenhum cliente aguardando.</p>
  </div>
</template>

<script>
// import Vue from "vue";
import Services from "./Services";

export default {
  props: ["clients"],
  extends: Services,
  filters: {
    question: function(value) {
      if (typeof value !== "boolean") {
        return value;
      }
      return value ? "Sim" : "Não";
    }
  },
  methods: {
    // finishService(client) {
    //   // lógica para mudar para true e mudar a cor do texto
    //  //  linha de código da tag v-bind:class="client.servico.finalizado? 'atendido': ''"
    //   client.servico.finalizado = true;
    //   Vue.set(
    //     this.clients,
    //     this.clients.findIndex(
    //       clienteAtendido => clienteAtendido.nome === client.nome
    //     ),
    //     client
    //   );
    // lógica para mandar para o balanço
    // mandei esse methods para services.vue
    // this.$emit("served", client);
    // }
  }
};
</script>

<style scoped>
.atendido {
  color: green;
  font-weight: bold;
}
</style>
