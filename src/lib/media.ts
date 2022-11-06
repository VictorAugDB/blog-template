import { getStrapiUrl } from "./api"

type Attributes = {
  url: string
}

export type GetStrapiMediaInput = {
  data: {
    attributes: Attributes
  }
}

export function getStrapiMedia({ data }: GetStrapiMediaInput) {
  const { url } = data.attributes
  const imageUrl = url.startsWith('/') ? getStrapiUrl(url) : url

  return imageUrl
}