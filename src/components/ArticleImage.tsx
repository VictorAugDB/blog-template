import Image from "next/future/image"
import { Container } from "../styles/components/article-image"

type ArticleImageProps = {
  src: string,
  alt: string
}

export const ArticleImage: React.FunctionComponent<ArticleImageProps> = ({ src, alt }) => {
  return (
    <Container>
      <div />
      <Image src={src} width={235} height={235} alt={alt} />
    </Container>
  )
}
