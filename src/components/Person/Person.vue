<template>
  <div class="">
    <h1>上面组件当前求和为：{{ n }}</h1>
    <!-- <h2>当前的朋友为：{{ friend.length }}人</h2> -->
    <input type="text" v-model="add" />
    <button @click="addFriend(add)">添加一个朋友</button>
    <button @click="wei(add)">添加一个有“维”字的名字</button>
    <button @click="randomAddFriend">点击随机添加一个人</button>
    <ul>
      <li v-for="item in friend" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      add: '',
    }
  },
  computed: {
    ...mapState('person', ['friend', 'n']),
    ...mapState('count', ['n']),
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    // addFriend() {

    // },
    ...mapActions('person', ['addFriend', 'wei', 'randomAddFriend']),
  },
}
</script>

<style scoped lang="less"></style>
