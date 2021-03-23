<template>
  <div>
    <h3>Fila de Consultas</h3>
    <v-simple-table v-if="clients.length > 0">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Sintomas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(client, index) in clients" :key="index">
          <td>{{ client.nome }}</td>
          <td>{{ client.idade }}</td>
          <td>{{ client.raca }}</td>
          <td>{{ client.servico.observacoes }}</td>
          <td>
            <v-btn
              elevation="2"
              color="primary"
              x-small
              v-on:click="finishService(client)"
            >Finalizar Serviço</v-btn>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <p v-else>Nenhum cliente aguardando.</p>
  </div>
</template>

<script>
import Services from "./Services";

export default {
  props: ["clients"],
  extends: Services
  // mandei esse methods para services.vue
  // methods: {
  //   finishService(client) {
  //     this.$emit("served", client);
  //   }
  // }
};
</script>

<style></style>
