<template>
  <div>
    <h1>hello world</h1>
    <foo />
    <bar />
  </div>
</template>

<script>
import Foo from './components/Foo'
import Bar from './components/Bar'

export default {
  name: 'App',
  components: {
    Foo,
    Bar,
  },
}
</script>

<style>
</style>
