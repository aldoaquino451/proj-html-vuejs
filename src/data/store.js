import { reactive } from 'vue'

export const store = reactive({
  sections: [
    {
      title: 'home',
      titleSecond: 'alway the best way you need it',
      subtitle: 'the best business consulting',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minus, repellat nesciunt, dolorum adipisci non, accusantium animi ad odio deleniti exercitationem quia sunt totam corporis impedit eaque? Velit, odio tempore?',
      button: 'read more'
    },
    {
      title: 'about us',
      subtitle: 'we make your stategy work',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minus, repellat nesciunt, dolorum adipisci non, accusantium animi ad odio deleniti exercitationem quia sunt totam corporis impedit eaque? Velit, odio tempore?',
      button: null
    },
    {
      title: 'project',
      subtitle: 'our expert trusted consultans help clients',
      text: null,
      button: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>'
      ]
    },
    {
      title: 'testimonial',
      subtitle: 'what\'s the customer say about our work',
      text: null,
      button: null
    },
    {
      title: 'blog',
      subtitle: 'the recent news you must read it',
      text: '',
      button: 'view all'
    },
    {
      title: 'contact',
      subtitle: 'let\'s talk about work',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque minus, repellat nesciunt, dolorum adipisci non, accusantium animi ad odio deleniti exercitationem quia sunt totam corporis impedit eaque? Velit, odio tempore?',
      button: 'get started'
    }
  ],

})
