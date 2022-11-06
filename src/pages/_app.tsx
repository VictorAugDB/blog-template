import App, { AppContext } from "next/app";
import type { AppProps } from 'next/app'
import { globalStyles } from "../styles/global"
import { fetchAPI } from "../lib/api"
import { createContext } from "react";
import { getStrapiMedia } from "../lib/media";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { darkTheme } from "../styles";

globalStyles()

interface MyAppPageProps extends AppProps {
  pageProps: {
    global: any
  }
}

type GlobalContextProps = {
  defaultSeo: any,
  siteName: string
}

export const GlobalContext = createContext({} as GlobalContextProps)

function MyApp({ Component, pageProps }: MyAppPageProps) {
  const { global } = pageProps

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: "light",
        dark: darkTheme.className
      }}
    >
      <Head>
        <link
          rel="shortcut icon"
          href={getStrapiMedia(global.attributes.favicon)} 
        />
      </Head>
      <GlobalContext.Provider value={global.attributes}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </ThemeProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI({
    path: '/global',
    urlParams: {
      populate: {
        favicon: "*",
        defaultSeo: {
          populate: "*",
        },
      },
    }
  })

  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes.data } }
}
