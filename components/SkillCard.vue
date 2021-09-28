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
    .flex.items-center.mb-6
      component(:is="iconComponent").mr-10
      .text-4xl.font-regular.text-gray-darkest {{ title }}
    div
      .bg-gradient-to-r.to-red-lightest.from-gray.h-1.mb-5
    div.text-gray {{ text }}
</template>

<script>

export default {
  props: ['title', 'text', 'iconComponent'],
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
