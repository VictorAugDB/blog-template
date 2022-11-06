import qs from "qs";

export function getStrapiUrl(path = ""): string {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://localhost:1337"
  }${path}`
}

type FetchApiInput = {
  path: string,
  urlParams?: any,
  options?: any
}

export async function fetchAPI({ path, urlParams, options }: FetchApiInput) {
  // Merge default and user options
  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
    },
    ...options
  }

  // Build request URL
  const queryString = qs.stringify(urlParams)
  const requestUrl = `${getStrapiUrl(
    `/api${path}${queryString ? `?${queryString}` : ""}`
  )}`

  // Trigger API call
  const response = await fetch(requestUrl, mergedOptions)

  // Handle response
  if (!response.ok) {
    console.error(response.statusText)
    throw new Error('An error ocurred please try again')
  }

  return await response.json()
}