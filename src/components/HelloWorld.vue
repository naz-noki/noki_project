<template>
  hi
  {{count}}
  <button @click="countPlus(count)">click</button>
</template>

<script>
export default{
  computed:{
    count(){
      return this.$store.getters.getCount;
    }
  },
  methods:{
    countPlus(count){
      this.$store.dispatch('actCountPlus', count);
    }
  }
}
</script>