import VPDocContent from '@/components/VPDocContent.tsx'
import markdown from '@/en-US/component/carousel.md?raw'

const CarouselPage: React.FC = () => {
  return (
    <VPDocContent markdown={markdown}>
      <h1>Carousel</h1>
    </VPDocContent>
  )
}

export default CarouselPage
