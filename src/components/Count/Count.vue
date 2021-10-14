<template>
  <div class="">
    <!-- <h1>下面组件的人数为：{{ friend.length }}</h1> -->
    <!-- <h2>当前求和为：{{ n }}</h2> -->
    <!-- <h2>当前求和为：{{ $store.state.n }}</h2> -->
    <h2>当前求和为：{{ n }}</h2>
    <!-- <h3>当前求和增加10倍：{{ $store.getters.multiple10 }}</h3> -->
    <h3>当前求和增加10倍：{{ multiple10 }}</h3>
    <select name="" id="" v-model="v">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment(v)">+</button>
    <button @click="decrement(v)">-</button>
    <button @click="incrementOdd(v)">奇数加</button>
    <button @click="incrementAsync(v)">异步加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
  computed: {
    ...mapState('count', ['n']), // 返回值是一个对象 这样写了就可以不用写 this.$store.state.n 了 直接写 this.n
    ...mapState('person', ['friend']), // 返回值是一个对象 这样写了就可以不用写 this.$store.state.n 了 直接写 this.n

    ...mapGetters('count', ['multiple10']), // 同理上面
  },
  watch: {},
  created() {},
  mounted() {
    console.log(this)
    // console.log(mapState(['n']))
  },
  beforeDestroy() {},
  methods: {
    // increment() {
    //   // this.n += this.v * 1
    //   // this.$store.dispatch('increment', this.v)
    //   this.$store.commit('JIA', this.v)
    // },
    // decrement() {
    //   // this.n -= this.v * 1
    //   // this.$store.dispatch('decrement', this.v)
    //   this.$store.commit('JIAN', this.v)
    // },
    ...mapMutations('count', { increment: 'JIA', decrement: 'JIAN' }),

    // 对象写法
    // ...mapActions({
    //   incrementOdd: 'incrementOdd',
    //   incrementAsync: 'incrementAsync',
    // }),

    // 数组写法 就是都要一样
    ...mapActions('count', ['incrementOdd', 'incrementAsync']),

    // incrementOdd() {
    //   // if (this.$store.state.n % 2 !== 0) {
    //   //   // this.n += this.v * 1
    //   //   this.$store.dispatch('increment', this.v)
    //   // }
    //   this.$store.dispatch('incrementOdd', this.v)
    // },
    // incrementAsync() {
    //   // setTimeout(() => {
    //   //   // this.n += this.v * 1
    //   //   this.$store.dispatch('increment', this.v)
    //   // }, 1000)
    //   this.$store.dispatch('incrementAsync', this.v)
    // },
  },
}
</script>

<style scoped lang="less"></style>
