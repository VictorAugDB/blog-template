import Image from "next/future/image"
import { Container } from "../styles/components/share-social-media"
import ShareFacebook from '../assets/facebook-icon.svg'
import ShareTwitter from '../assets/twitter-icon.svg'
import ShareLinkedin from '../assets/linkedin-icon.svg'
import SharePinterest from '../assets/pinterest-icon.svg'
import { SmallTextRegular } from "../styles/texts"
import { HtmlHTMLAttributes } from "react"
import Link from "next/link"

interface ShareSocialMediasProps extends HtmlHTMLAttributes<HTMLDivElement> {
  socialMediaUrls: {
    facebook?: string
    twitter?: string
    linkedin?: string
    pinterest?: string
  }
}

export const ShareSocialMedias: React.FunctionComponent<ShareSocialMediasProps> = ({ socialMediaUrls, ...rest }) => {
  const defaultImagesSize = {
    width: 38,
    height: 38
  }

  const shareSocialMediaData = [{
    src: ShareFacebook,
    url: socialMediaUrls?.facebook,
    ...defaultImagesSize,
    alt: "Share Facebook"
  }, {
    src: ShareTwitter,
    url: socialMediaUrls?.twitter,
    ...defaultImagesSize,
    alt: "Share Twitter"
  }, {
    src: ShareLinkedin,
    url: socialMediaUrls?.linkedin,
    ...defaultImagesSize,
    alt: "Share Linkedin"
  }, {
    src: SharePinterest,
    url: socialMediaUrls?.pinterest,
    ...defaultImagesSize,
    alt: "Share Pinterest"
  }]

  return (
    <Container {...rest}>
      <SmallTextRegular>Share:</SmallTextRegular>
          {shareSocialMediaData.map(data => (
            <Link key={data.alt} href={data.url ? data.url : '#'} scroll={false}>
              <a target={data.url ? "_blank" : "_self"}>
                <Image key={data.alt} src={data.src} width={data.width} height={data.height} alt={data.alt}></Image>
              </a>
            </Link>  
          ))}
    </Container>
  )
}