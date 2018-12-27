<template>
  <div class="dealed-list-table">
    <div class="no-data" v-if="payerCompanyList.length == 0">暂无数据</div>
    <table class="base-table" v-else>
      <thead>
        <headerTh></headerTh>
      </thead>
      <tbody>
        <template v-for="(item, index) in payerCompanyList">
          <ceilTr :itemData="item"></ceilTr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<style>
</style>
<script>
  import headerTh from './headerTh.vue'
  import ceilTr from './ceilTr.vue'
  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    computed: {
      payerCompanyList () {
        return this.$store.getters.payerCompanyList || []
      }
    },
    components: {
      headerTh,
      ceilTr
    }
  }
</script>
