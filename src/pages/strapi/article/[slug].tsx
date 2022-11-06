import Image from "next/future/image"
import ReactMarkdown from "react-markdown"
import { Seo } from "../../../components/Seo"
import { Layout } from "../../../components/StrapiBlog/Layout"
import { fetchAPI } from "../../../lib/api"
import { getStrapiMedia } from "../../../lib/media"
import defaultImage from '../../../assets/team.png'
import { formatDate } from "../../../helpers/formatDate"

const Article = ({ article, categories }: any) => {
  const imageUrl = article.attributes.image ? getStrapiMedia(article.attributes.image) : defaultImage.src

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true
  }

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />

      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article.attributes.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown>
            {article.attributes.content}
          </ReactMarkdown>
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.attributes.author && article.attributes.author.data.attributes.picture && (
                <Image
                  src={getStrapiMedia(
                    article.attributes.author.data.attributes.picture
                  )}
                  alt={
                    article.attributes.author.data.attributes.picture.data
                      .attributes.alternativeText
                  }
                  style={{
                    position: "static",
                    borderRadius: "20%",
                    height: 60,
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.attributes.author && article.attributes.author.data.attributes.name}
              </p>
              <div className="uk-text-meta uk-margin-remove-top">
                <div>
                  {formatDate('pt-BR', new Date(article.attributes.publishedAt))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI({
    path: '/articles',
    urlParams: { fields: ["slug"]}
  })

  return {
    paths: articlesRes.data.map((article: any) => ({
      params: {
        slug: article.attributes.slug
      },
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const articlesRes = await fetchAPI({
    path: "/articles",
    urlParams: {
      filters: {
        slug: params.slug
    },
    options: {
      populate: ["image", "category", "author.picture"]
    }
  }})

  const categoriesRes = await fetchAPI({
    path: "/categories"
  })

  return {
    props: {article: articlesRes.data[0], categories: categoriesRes},
    revalidate: 1
  }
}

export default Article