import VPDocContent from '@/components/VPDocContent.tsx'
// import markdown from '@/en-US/guide/nav.md?raw'
import L1Categories from '@/components/nav/L1Categories.tsx'
import L2Categories from '@/components/nav/L2Categories.tsx'
import L3Categories from '@/components/nav/L3Categories.tsx'
import TopNavigationExample from '@/components/nav/TopNavigationExample.tsx'

const NavPage: React.FC = () => {
  return (
    <VPDocContent>
      <h1 id="navigation">Navigation</h1>
      <p>
        Navigation focuses on solving the users' problems of where to go and how to get there.
        Generally it can be categorized into 'sidebar navigation' and 'top navigation'.
      </p>

      <h2 id="choose-the-right-navigation">Choose the right navigation</h2>
      <p>
        An appropriate navigation gives users a smooth experience, while an inappropriate one leads
        to confusion. Here are the differences between sidebar navigation and top navigation.
      </p>

      <h2 id="side-navigation">Side Navigation</h2>
      <p>
        Affix the navigation at the left edge, thus improves its visibility, making it easier to
        switch between pages. In this case, the top area of the page holds commonly used tools, e.g.
        search bar, help button, notice button, etc. Suitable for background management or utility
        websites.
      </p>

      <h3 id="level-1-categories">Level 1 categories</h3>
      <p>
        Suitable for simply structured sites with only one level of pages. No breadcrumb is needed.
      </p>
      <L1Categories />

      <h3 id="level-2-categories">Level 2 categories</h3>
      <p>
        Sidebar displays up to two levels of navigation. Breadcrumbs are recommended in combination
        of second level navigation, making it easier for the users to locate and navigate.
      </p>
      <L2Categories />

      <h3 id="level-3-categories">Level 3 categories</h3>
      <p>
        Suitable for complicated utility websites. The left sidebar holds first level navigation,
        and the middle column displays second level navigation or other utility options.
      </p>
      <L3Categories />

      <h3 id="top-navigation">Top Navigation</h3>
      <p>
        Conforms to the normal browsing order from top to bottom, which makes things more natural.
        The navigation amount and text length are limited to the width of the top.
      </p>
      <p>Suitable for sites with few navigation and large chunks.</p>
      <TopNavigationExample />
    </VPDocContent>
  )
}

export default NavPage
