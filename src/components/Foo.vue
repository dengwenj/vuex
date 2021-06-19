<template>
  <div class="">
    <!-- <h3>Foo 的 a:{{ $store.state.foo.a }}</h3> -->
    <!-- <h3>{{ $store.getters.get }}</h3> -->
    <h3>{{ a }}</h3>
    <h3>{{ get }}</h3>
    <h3>Foo 组件</h3>
    <h3>{{ count }}</h3>
    <h3>{{ message }}</h3>
    <h3>{{ ming }}</h3>
    <button @click="add">增加</button>
    <button @click="changes('你好，世界')">改变</button>
    <button @click="async">异步增加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      count: 'count',
      message: 'message',
    }),
    ...mapState('foo', {
      a: 'a',
    }),

    ...mapGetters({
      ming: 'ming',
    }),
    ...mapGetters('foo', ['get']),
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    add() {
      // this.$store.commit('add')
      this.$store.commit({
        type: 'add',
        num: 2,
      })
    },
    ...mapMutations({
      changes: 'hello',
    }),

    async() {
      this.$store.dispatch('fenfa', {
        num: 200,
      })
    },
  },
}
</script>

<style scoped lang="less"></style>