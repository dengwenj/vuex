<template>
  <div>
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from './components/Count/Count'
import Person from './components/Person/Person'
export default {
  name: 'App',
  components: { Count, Person },
}
</script>

<style></style>
