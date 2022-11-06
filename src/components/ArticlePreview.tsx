import Image from "next/future/image"
import Link from "next/link"
import { AuthorContainer, Container, InfoContainer, MainInfo, PublishedAt, SecondaryInfo } from "../styles/components/article-preview"
import { H5, NormalTextRegular } from "../styles/texts"
import { ArticleImage } from "./ArticleImage"
import { ArticleTheme } from "./ArticleTheme"
import latestArticleImage from '../assets/team.png'
import { CommentsQuantity } from "./CommentsQuantity"
import { formatDate } from "../helpers/formatDate"
import { getStrapiMedia, GetStrapiMediaInput } from "../lib/media"

type Author = {
  name: string
  imageUrl: string
}

type ArticlePreviewProps = {
  theme: string,
  title: string,
  publishedAt: Date,
  commentsNumber: number,
  description: string,
  author: Author
  image: GetStrapiMediaInput
}

export const ArticlePreview: React.FunctionComponent<ArticlePreviewProps> = ({ theme, title, publishedAt, commentsNumber, description, author, image }) => {
  return (
    <Container>
      <ArticleImage src={getStrapiMedia(image)} alt=''/>

      <InfoContainer>
         <MainInfo>
          <ArticleTheme theme={theme}/>  
          <div>
            <H5>{title}</H5>

            <SecondaryInfo>
              <PublishedAt>Added: {formatDate('pt-BR', publishedAt)}</PublishedAt>
              <CommentsQuantity quantity={commentsNumber} />
            </SecondaryInfo>
          </div>
          <NormalTextRegular>{description}</NormalTextRegular>
        </MainInfo>
        
        <AuthorContainer>
          <Image src={author.imageUrl} width={24} height={24} alt='Author'></Image>
          <NormalTextRegular>{author.name}</NormalTextRegular>
        </AuthorContainer>
      </InfoContainer>
    </Container>
  )
}