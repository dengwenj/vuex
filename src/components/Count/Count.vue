<template>
  <div class="">
    <!-- <h2>当前求和为：{{ n }}</h2> -->
    <h2>当前求和为：{{ $store.state.n }}</h2>
    <select name="" id="" v-model="v">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数加</button>
    <button @click="incrementAsync">异步加</button>
  </div>
</template>

<script>
export default {
  name: 'Count',
  components: {},
  props: {},
  data() {
    return {
      // n: 0,
      v: 1,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // console.log(this)
  },
  beforeDestroy() {},
  methods: {
    increment() {
      // this.n += this.v * 1
      this.$store.dispatch('increment', this.v)
    },
    decrement() {
      // this.n -= this.v * 1
      this.$store.dispatch('decrement', this.v)
    },
    incrementOdd() {
      if (this.$store.state.n % 2 !== 0) {
        // this.n += this.v * 1
        this.$store.dispatch('increment', this.v)
      }
    },
    incrementAsync() {
      setTimeout(() => {
        // this.n += this.v * 1
        this.$store.dispatch('increment', this.v)
      }, 1000)
    },
  },
}
</script>

<style scoped lang="less"></style>
