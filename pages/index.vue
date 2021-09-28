<template lang="pug">
  .bg-gray-lightest
    div(class=`
      max-w-screen-2xl
      m-auto
    `)
      div(class=`
         bg-gray-dark flex justify-left px-3 pt-3 pb-2
         md:justify-between md:items-center
      `)
        img(:src="require('@/public/images/logo-infectic-transparent.png')" class=`
          items-center
          w-1/4 md:w-28
          my-2
        `)
        div(class=`
          md:block
           hidden flex items-center
        `)
          a(href="mailto:hello@infectic.com" target="_blank")
            div(class=`
              rounded-lg py-2 px-6 text-red-lightest bg-gradient-to-r from-red to-gray
              hover:border-2
            `) Let's Talk
      div(class=`
         bg-gradient-to-r from-red-lightest to-gray h-1
      `)
      div(class=`
         relative bg-gray-darkest
         before:bg-gradient-to-t before:from-gray-dark
         before:left-0 before:top-0 before:right-0 before:bottom-0
         md:before:hidden before:absolute
      `)
        img(:src="require('@/public/images/face-bg.webp')" class=`
          bg-gradient-to-t from-gray
          w-full
          md:ml-auto md:mr-0
          md:w-1/2 md:align-left
          lg:w-5/12
        `)
        div(class=`
           absolute bottom-0 left-0 right-0 z-10 md:top-1/3
        `)
          div(class=`
            md:top-50
            md:pl-5
            lg:pl-9
          `)
            div(class=`
               text-red text-6xl text-center w-full pb-0
               md:text-left md:text-8xl
            `) Contagiously
            div(class=`
               text-red-lightest text-8xl text-center w-full
               md:text-left md:text-9xl
            `) Effective
      div(class=`
        bg-black
        md:hidden
      `)
        div(class=`
           flex items-center p-3
        `)
          a(href="mailto:hello@infectic.com" target="_blank" class=`
            m-auto
            my-3
          `)
            div(class=`
              rounded-lg py-3 px-10 text-red-lightest bg-gradient-to-r from-red to-gray
              text-xl
            `) Let's Talk
      div.bg-gradient-to-r.from-red-lightest.to-gray.h-1
      div.bg-gray-darkest.py-6
        div(class=`
          flex
          flex-col md:flex-row mx-1
         `)
            SkillCard(v-for="skill in skills" :title="skill.title" :text="skill.text" :iconComponent="skill.iconComponent" :key="skill.title")
    .w-full.bg-black.text-white
      .max-w-8xl.m-auto.p-8
        img(:src="require('@/public/images/logo-infectic-transparent.png')" class=`
          items-center
          w-1/4 md:w-28
          my-2
        `).my-3
        .flex.justify-between.items-baseline
          p.my-10 Copyright 2021 Infectic Ltd, all rights reserved.
          //- nuxt-link(to="/imprint").underline Imprint
</template>

<script>

export default {

  data () {
    return {
      skills: [
        {
          title: "Digital Marketing",
          text: "We're well versed in scaling web and mobile projects. We have deep experience with Google Ads and have scaled products based on Influencer Marketing and SEO.",
          iconComponent: "MarketingIcon",
        },
        {
          title: "Development",
          text: "With Extensive Experience in Web and Mobile Development we're well prepared to tackle complex web-based IT projects. We know how to build a proper architecture and to scale the infrastructure behind.",
          iconComponent: "DevIcon",
        },
      ]
    }
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="css" scoped>
.header-container:before {
    content: '';
    position:absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,hsl(150,2%,15%) 100%);
    z-index: 1;
}
</style>
