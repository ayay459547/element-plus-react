import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import componentSideNav from '@/crowdin/pages/component.json'
import guideSideNav from '@/crowdin/pages/guide.json'

const BASE_TITLE = 'Element Plus React'
const BASE_DESCRIPTION = 'Element Plus React is a high-quality React UI library, a port of Element Plus for the React ecosystem.'

export function usePageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    let pageTitle = ''
    let pageDescription = BASE_DESCRIPTION

    if (pathname === '/') {
      pageTitle = 'Home'
    } else if (pathname.startsWith('/guide')) {
      // Guide links in JSON already include /guide prefix
      Object.values(guideSideNav).forEach((section: any) => {
        section.children.forEach((item: any) => {
          if (item.link === pathname) {
            pageTitle = item.text
            pageDescription = `Learn about ${item.text} in Element Plus React.`
          }
        })
      })
    } else if (pathname.startsWith('/component')) {
      const componentPath = pathname.replace('/component', '') || '/overview'
      Object.values(componentSideNav).forEach((section: any) => {
        section.children.forEach((item: any) => {
          if (item.link === componentPath) {
            pageTitle = item.text
            pageDescription = `Documentation and examples for the ${item.text} component in Element Plus React.`
          }
        })
      })
    } else if (pathname.startsWith('/resource')) {
      pageTitle = 'Resource'
      pageDescription = 'Resources and assets for Element Plus React.'
    }

    // Update Title
    if (pageTitle) {
      document.title = `${pageTitle} | ${BASE_TITLE}`
    } else {
      document.title = BASE_TITLE
    }

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', pageTitle ? `${pageTitle} | ${BASE_TITLE}` : BASE_TITLE)
    }
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', pageDescription)
    }
  }, [pathname])
}
