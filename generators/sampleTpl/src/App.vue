<template>
  <div>{{msg}}</div>
</template>
<script>
  import boxObj from './common/dialogBox'
//  /* global myTest */
  export default{
    data () {
      return {
        msg: 'look here'
      }
    },
    components: {
    },
    computed: {
    },
    created () {
    },
    mounted () {
      this.$store.dispatch('getDealedData')
      boxObj.testbox('to the test')
    },
    methods: {
    }
  }
</script>

