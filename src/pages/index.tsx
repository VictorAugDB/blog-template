import type { NextPage } from 'next'
import Image from 'next/future/image'
import { Header } from '../components/Header'
import { Container, ImageContainer, Input, LatestArticle, LatestArticles, LatestArticlesContainer, MainContent, NewsletterContainer, NewsletterContent, PresentationContainer } from '../styles/pages/home'
import { H2, H3, LargeTextRegular } from '../styles/texts'
import latestArticleImage from '../assets/team.png'
import { ArticleTheme } from '../components/ArticleTheme'
import { ArticlePreview } from '../components/ArticlePreview'
import unknownAvatar from '../assets/unknown.webp'
import { Presentation } from '../components/Presentation'
import { Contact } from '../components/Contact'
import { Button } from '../components/Button'
import { FormEvent, useRef } from 'react'
import { fetchAPI } from '../lib/api'
import { getStrapiMedia, GetStrapiMediaInput } from '../lib/media'
import Link from 'next/link'

type SocialMediaUrls = {
  facebook: string
  twitter: string
  linkedin: string
  pinterest: string
}

type Author = {
  name: string
  picture: GetStrapiMediaInput
  articles: number[]
  email: string
  socialMediaUrls: SocialMediaUrls
  description: string
}

type Article = {
  id: number
  title: string
  description: string
  image: GetStrapiMediaInput
  category: {
    id: number,
    name: string
  },
  comments: [{
    slug: string
  }],
  content: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string,
  author: Author
}

type HomePageProps = {
  articles: Article[]
}

const Home: NextPage<HomePageProps> = ({ articles }) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const latestArticle = articles[articles.length - 1]

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if(emailRef.current) {
      console.log(emailRef.current.value)
    }
  }
  
  return (
    <>
      <Header />
      <Container>
        <LatestArticle>
          <Link href={`articles/${latestArticle.slug}`}>
            <a>
              <div>
                <ArticleTheme theme={latestArticle.category.name} />
                <H2>
                  {latestArticle.title}
                </H2>
                <LargeTextRegular>
                  {latestArticle.description}
                </LargeTextRegular>
              </div>
              <ImageContainer>
                <div />
                <Image src={getStrapiMedia(latestArticle.image)} width={730} height={501} style={{ maxWidth: "100%", height: "auto" }} alt='Latest Article Image' />
              </ImageContainer>
            </a>
          </Link>
        </LatestArticle>
        <MainContent>
          <LatestArticlesContainer>
            <H3>Latest Articles</H3>
            <LatestArticles>
              {articles.slice(-4).map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`}>
                  <a>
                    <ArticlePreview 
                      theme={article.category.name}
                      author={{ 
                        name: article.author.name,
                        imageUrl: article.author.picture ? getStrapiMedia(article.author.picture) : unknownAvatar.src 
                      }}
                      commentsNumber={article.comments.length}
                      description={article.description}
                      title={article.title}
                      publishedAt={new Date(article.publishedAt)}
                      image={article.image} />
                    </a>
                  </Link>
              ))}
            </LatestArticles>
          </LatestArticlesContainer>
          <PresentationContainer>
            <Presentation />
          </PresentationContainer>
          <NewsletterContainer onSubmit={handleSubmit}>
            <NewsletterContent  >
              <H3>Newsletter</H3>
              <LargeTextRegular>
                Subscribe my Newsletter for new blog posts, tips {'&'} new photos.
                Let{`'`}s stay updated!
              </LargeTextRegular>
              <Input name="email"  ref={emailRef} placeholder="You e-mail *" required />
              <Button variant="medium">Subscribe</Button>
            </NewsletterContent>
          </NewsletterContainer>
        </MainContent>
        <Contact />
      </Container>
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const articlesRes = await fetchAPI({
    path: "/articles",
    urlParams: {
      populate: {
        category: {
          populate: ["name"]
        },
        image: {
          polulate: "*"
        },
        author: {
          populate: "*"
        },
        comments: {
          populate: "*"
        }
      },
    }
  })

  const articles = articlesRes.data.map((article: any) => ({
    id: article.id,
    ...article.attributes,
    author: {
      id: article.attributes.author.data.id,
      ...article.attributes.author.data.attributes
    },
    comments: [
      ...article.attributes.comments.data
    ],
    category: {
      id: article.attributes.category.data.id,
      name: article.attributes.category.data.attributes.name
    }
  }))


  return {
    props: { articles },
    revalidate: 60 * 60 * 2 // 2 Hours
  }
}

export default Home
