<template lang="pug">
  div
    div.bg-gray-dark.flex.justify-left.px-3.pt-3.pb-2
      img(:src="require('@/public/images/Logo-light.png')").items-center.w-20
      div(class=`
        md:block
      `).hidden.flex.items-center
        a(href="mailto:hello@infectic.com" target="_blank")
          div(class=`
            rounded-lg py-2 px-6 text-red-lightest bg-gradient-to-r from-red to-gray
            hover:border-2
          `) Let's Talk
    div(class=``).bg-gradient-to-r.from-red-lightest.to-gray.h-1
    .relative.header-container.bg-gray-dark
      img(width="100%" :src="require('@/public/images/face-bg.png')").bg-gradient-to-t.from-gray
      div.absolute.bottom-0.left-0.right-0.z-10
        div.text-red.text-6xl.text-center.w-full.pb-0 Contagiously
        div.text-red-lightest.text-8xl.text-center.w-full Effective
    div.bg-gray-darkest
      div(class=`
      `).flex.items-center.p-3
        a(href="mailto:hello@infectic.com" target="_blank" class=`
          m-auto
          my-3
        `)
          div(class=`
            rounded-lg py-3 px-10 text-red-lightest bg-gradient-to-r from-red to-gray
            text-xl
          `) Let's Talk
    div.bg-gradient-to-r.from-red-lightest.to-gray.h-1
    div.bg-gray-dark.py-6
      .flex.flex-col.mx-1
          SkillCard(v-for="skill in skills" :title="skill.title" :text="skill.text" :key="skill.title")
  //- div
  //-   div.bg-gray-dark.flex.justify-between.px-6.pt-3.pb-2
  //-     img(:src="require('@/public/images/Logo-light.png')").items-center
  //-     div.flex.items-center
  //-       a(href="mailto:hello@infectic.com" target="_blank")
  //-         div(class=`
  //-           rounded-lg py-2 px-6 text-red-lightest bg-gradient-to-r from-red to-gray
  //-           hover:border-2
  //-         `) CONTACT
  //-   div(class=`
  //-   `).bg-gradient-to-r.from-red-lightest.to-gray.h-1
  //-   div
  //-     img(:src="require('@/public/images/shouting-background.png')")
  //-     span.absolute.bottom-96.left-9.text.text-red.text-md-8xl.text-xl Contagiously
  //-     span.absolute.bottom-72.left-9.text.text-red-lightest.text-md-8xl.text-xl Effective.
  //-   div.bg-gradient-to-r.from-red-lightest.to-gray.h-1
  //-   div.bg-gray-darkest.h-4.pb-10
  //-   div.bg-gray-lightest.h-96
  //-     .flex.justify-between
  //-       SkillCard(v-for="skill in skills" :title="skill.title" :text="skill.text" :key="skill.title")
</template>

<script>

export default {

  data () {
    return {
      skills: [
        {
          title: "Digital Marketing",
          text: "We're well versed in scaling web and mobile projects. We have deep experience with Google Ads and have scaled products based on Influencer Marketing and SEO.",
        },
        {
          title: "Development",
          text: "With Extensive Experience in Web and Mobile Development we're well prepared to tackle complex web-based IT projects. We know how to build a proper architecture and to scale the infrastructure behind.",
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
