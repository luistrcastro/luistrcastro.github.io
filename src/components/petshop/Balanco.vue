<template>
  <div>
    <h3>Serviços do dia</h3>
    <v-simple-table v-if="clients.length > 0">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
          <th>Raça</th>
          <th>Serviço</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(client, index) in clients" :key="index">
          <td>{{ client.nome }}</td>
          <td>{{ client.idade }}</td>
          <td>{{ client.raca }}</td>
          <td>{{ client.servico.nome }}</td>
          <td>{{ client.servico.preco | price }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">Total</td>
          <td>{{ servicesTotal | price }}</td>
        </tr>
      </tfoot>
    </v-simple-table>
    <p v-else>Nenhum serviço realizado.</p>
  </div>
</template>

<script>
export default {
  props: ["clients"],
  computed: {
    servicesTotal() {
      if (!Array.isArray(this.clients)) {
        return 0;
      }

      return this.clients.reduce(
        (total, client) => total + client.servico.preco,
        0
      );
    }
  }
};
</script>

<style></style>
