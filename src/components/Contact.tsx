import { Container, Info, Logo, MainContent, SocialMedia } from "../styles/components/contact"
import { H6, NormalTextRegular, SmallTextRegular } from "../styles/texts"
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr'
import Link from "next/link"

export const Contact: React.FunctionComponent = () => {
  const aboutMe = {
    title: 'About Me',
    topics: [{
      name: 'My Portifolio',
      url: '#'
    }]
  }

  return (
    <Container>
      <MainContent>
        <SocialMedia>
          <Logo>Template Blog</Logo>
          <NormalTextRegular>
            The main purpose of this blog is to share knowledge to help you to achieve your goals fell free to read the articles,
            ask questions and interact with me and another people in the article comments!
            Follow me in my social networks where I&apos;m sharing more content about me.
          </NormalTextRegular>
          <div>
            <Link href="#" target="_blank">
              <a target="_blank">
                <GrFacebookOption />
              </a>
            </Link>
            <Link href="#">
              <a target="_blank">
                <GrTwitter />
              </a>
            </Link>
            <Link href="#">
              <a target="_blank">
                <GrInstagram />
              </a>
            </Link>
          </div>
        </SocialMedia>
        <Info>
          <div>
            <H6>{aboutMe.title}</H6>
            <div>
              {aboutMe.topics.map(topic => (
                <Link key={topic.name} href={topic.url}>
                  <a>{topic.name}</a>
                </Link>
              ))}
            </div>
          </div>
        </Info>
      </MainContent>
      <SmallTextRegular>Blog Rock © {new Date().getFullYear()} All Right Reserved</SmallTextRegular>
    </Container>
  )
}