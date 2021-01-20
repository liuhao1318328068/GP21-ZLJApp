export default {
  methods: {
    toEvaluate(model_id) {
      this.$router.push({
        name: 'evaluate',
        params: {
          model_id
        }
      })
    }
  },
}