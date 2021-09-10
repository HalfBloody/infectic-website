<template lang="pug">
  div(class=`
    md:w-1/2
    w-full
    bg-gray-lightest
    mt-0
    md:mt-9
    md:ml-6
    md:mr-9
    mb-3
    md:mb-12
    p-16
    rounded-xl
    filter
    drop-shadow
  `)
    .text-xl.font-bold.text-gray-darkest.mb-6 {{ title }}
    div
      .bg-gradient-to-r.to-red-lightest.from-gray.h-1.mb-5
    div.text-gray {{ text }}
</template>

<script>

export default {
  props: ['title', 'text'],
  data () {
    return {

    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="css" scoped>
</style>
