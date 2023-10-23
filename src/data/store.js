import { reactive } from 'vue'

export const store = reactive({

  /* ----- TITOLI DELLE SECTION ----- */
  sections: [
    {
      title: 'alway the best way you need it',
      subtitle: 'the best <br>business <br>consulting',
      text: null
    },
    {
      title: 'about us',
      subtitle: 'we make your stategy work',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but. When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.'
    },
    {
      title: 'project',
      subtitle: 'our expert trusted consultans <br>help clients',
      text: null,
    },
    {
      title: 'testimonial',
      subtitle: 'what\'s the customer say <br>about our work',
      text: null,
    },
    {
      title: 'blog',
      subtitle: 'the recent news you must read it',
      text: null,
    }
  ],


  /* ----- SERVIZI ----- */
  services: [
    {
      title: 'statistical consulting',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      icon: 'fa-solid fa-chart-line'
    },
    {
      title: 'digital consulting',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      icon: 'fa-solid fa-bullhorn'
    },
    {
      title: 'banking conuslting consulting',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      icon: 'fa-solid fa-wallet'
    },
    {
      title: 'enterprise consulting',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      icon: 'fa-solid fa-bullseye'
    },
  ],


  /* ----- BUTTON ----- */
  buttons: [
    'read more',
    'get started',
    'view all',
    'get started',
  ],


  /* ----- BLOG ----- */
  blogCards: [
    {
      image: 'img/business-people-working-together-on-project-and-5FHSKBL-1390.jpg',
      date: ['july 4, 2019', 'by paul'],
      title: 'Canadian Consulting Film acquired by UK Giant',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.'
    }, {
      image: 'img/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg',
      date: ['july 4, 2019', 'by paul'],
      title: 'Canadian Consulting Film acquired by UK Giant',
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.'
    }
  ],

  /* ----- TESTIMOMIAL ----- */
  testimonialCards: [
    {
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      name: 'Vera Duncan',
      company: 'Amazon Inc.',
      image: 'img/oliver-ragfelt-488196-2.jpg'
    }, {
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      name: 'Vera Duncan',
      company: 'Amazon Inc.',
      image: 'img/oliver-ragfelt-488196-unsplash.jpg'
    }, {
      text: 'When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but.',
      name: 'Vera Duncan',
      company: 'Amazon Inc.',
      image: 'img/12679.jpg'
    }
  ],

  /* ----- PROJECT ----- */
  projectCard: [
    {
      image: '221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg',
      name: 'Purinky Products',
      category: 'uncategorized',
      isVisible: false
    },
    {
      image: 'DRY-1-790x592.jpg',
      name: 'Purinky Products',
      category: 'uncategorized',
      isVisible: false
    },
    {
      image: 'z1el4c4p-790x592.jpg',
      name: 'Purinky Products',
      category: 'uncategorized',
      isVisible: false
    }
  ]

})
