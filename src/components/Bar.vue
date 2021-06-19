<template>
  <div class="">
    <h3>Bar 组件</h3>
    <h3>{{ count }}</h3>
    <h3>{{ message }}</h3>
    <h3>{{ ming }}</h3>
    <h3>{{ hanshu(3).name }}</h3>
    <button @click="add">增加</button>
    <button @click="asyncAdd({ num: 1000 })">异步增加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    message() {
      return '哈哈哈哈哈'
    },
    ...mapState({
      count: 'count',
      message: 'message',
    }),
    ...mapGetters(['ming', 'hanshu']),
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    add() {
      // this.$store.commit('add')
      this.$store.commit({
        type: 'add',
        num: 10,
      })
    },
    ...mapActions({
      asyncAdd: 'fenfa',
    }),
  },
}
</script>

<style scoped lang="less"></style>