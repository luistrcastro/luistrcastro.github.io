<script>
export default {
  methods: {
    finishService(client) {
      this.$emit("served", client);
      // alert("Serviço finalizado.");
    },

    addToCart(product) {
      this.$emit("addToCart", product);
    }
  }
};
</script>
