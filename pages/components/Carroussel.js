import dynamic from 'next/dynamic'

const Carousel = dynamic(
  () => import('react-spring-3d-carousel'),
  { ssr: false }
)

export default function Carroussel({cards}) {
  return (
    <div>
      <Carousel slides={cards} />
    </div>
  );
}