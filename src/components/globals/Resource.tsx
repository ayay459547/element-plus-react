import VPHeroContent from '@/components/VPHeroContent.tsx'
import resourceLang from '@/crowdin/pages/resource.json'
import ElButton from '@ayay/element-plus-react/components/button/ElButton.tsx'
import ElCard from '@ayay/element-plus-react/components/card/ElCard.tsx'
import styles from './Resource.module.scss'

import AxureComponentsSvg from './resources/AxureComponentsSvg.tsx'
import FigmaTemplateSvg from './resources/FigmaTemplateSvg.tsx'
import FigmaUiKitSvg from './resources/FigmaUiKitSvg.tsx'
import FigmaVariablesSvg from './resources/FigmaVariablesSvg.tsx'
import MasterGoUiKitSvg from './resources/MasterGoUiKitSvg.tsx'
import SketchTemplateSvg from './resources/SketchTemplateSvg.tsx'

const mirrorUrl = 'element-plus.gitee.io'
const isMirrorUrl = () => {
  // if (!isClient) return
  return window.location.hostname === mirrorUrl
}
const resourceUrl = {
  github: {
    sketch:
      'https://github.com/ElementUI/Resources/raw/master/Element_Plus_Design_System_2022_1.0_Beta.zip',
    axure: 'https://github.com/ElementUI/Resources/raw/master/Element_Components_v2.1.0.rplib'
  },
  gitee: {
    sketch:
      'https://gitee.com/element-plus/resources/raw/master/Element_Plus_Design_System_2022_1.0_Beta.zip',
    axure: 'https://gitee.com/element-plus/resources/raw/master/Element_Components_v2.1.0.rplib'
  }
}[isMirrorUrl() ? 'gitee' : 'github']

const resourceCards = [
  {
    key: '2024-master-go-ui-kit',
    title: resourceLang.masterGo2024,
    icon: <MasterGoUiKitSvg />,
    intro: resourceLang.masterGo2024Intro,
    url: 'https://mastergo.com/community/resource/124855257836266'
  },
  {
    key: '2023-figma-ui-kit',
    title: resourceLang.figma2023,
    icon: <FigmaUiKitSvg />,
    intro: resourceLang.figma2023Intro,
    url: 'https://www.figma.com/community/file/1305760370797950824/element-plus-design-system-ui-kit'
  },
  {
    key: 'figma-variables',
    title: resourceLang.figmaVariables,
    icon: <FigmaVariablesSvg />,
    intro: resourceLang.figmaVariablesIntro,
    url: 'https://www.figma.com/community/file/1256091634199852065'
  },
  {
    key: 'figma',
    title: resourceLang.figma,
    icon: <FigmaTemplateSvg />,
    intro: resourceLang.figmaIntro,
    url: 'https://www.figma.com/community/file/1021254029764378306'
  },
  {
    key: 'sketch',
    title: resourceLang.sketch,
    icon: <SketchTemplateSvg />,
    intro: resourceLang.sketchIntro,
    url: resourceUrl.sketch
  },
  {
    key: 'axure',
    title: resourceLang.axure,
    icon: <AxureComponentsSvg />,
    intro: resourceLang.axureIntro,
    url: resourceUrl.axure
  }
]

const Resource = () => {
  const onClickHandler = (item: string) => {
    console.log(item)
    // sendEvent('resource_download', item)
  }

  return (
    <VPHeroContent>
      <div className={styles['page-resource']}>
        <h1>{resourceLang['title']}</h1>
        <p>{resourceLang.lineOne}</p>
        <div className={styles['resource-content']}>
          {resourceCards.map((card) => {
            return (
              <ElCard key={card.title} className={styles['card']} shadow="hover">
                <div className="w-30 m-auto">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.intro}</p>
                <a target="_blank" href={card.url} onClick={() => onClickHandler(card.title)}>
                  <ElButton type="primary">{resourceLang.download}</ElButton>
                </a>
              </ElCard>
            )
          })}
        </div>
      </div>
    </VPHeroContent>
  )
}

export default Resource
