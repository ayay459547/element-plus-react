import navs from '@/crowdin/pages/sidebar.json'

export const useNav = () => {
  // const navs = [
  //   {
  //     text: 'Guide',
  //     link: '/guide',
  //     activeMatch: '/guide'
  //   },
  //   {
  //     text: 'Component',
  //     link: '/component',
  //     activeMatch: '/component'
  //   },
  //   {
  //     text: 'Resource',
  //     link: '/resource',
  //     activeMatch: '/resource'
  //   }
  //   // {
  //   //   text: 'Playground',
  //   //   link: 'https://element-plus.run'
  //   // }
  // ]

  // 過濾 Playground
  return navs.filter((nav) => {
    return nav.text !== 'Playground'
  })
}
