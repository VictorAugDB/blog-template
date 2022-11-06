import Image from "next/future/image"
import { About, Container } from "../styles/components/presentation"
import presentationImage from '../assets/team.png'
import { H2, LargeTextRegular } from "../styles/texts"
import { Button } from "./Button"

export const Presentation: React.FunctionComponent = () => {
  return (
    <Container>
      <Image src={presentationImage} alt="Presentation Image"></Image>
      <About>
        <LargeTextRegular>About Me and this blog</LargeTextRegular>
        <H2>A short description</H2>
        <LargeTextRegular>
          Hello, I&apos;m Victor and I&apos;m a Fullstack Developer, I have some experience <input type="button" value="" /> building sites,
          and making APIs, and I&apos;m here to share some of my knowlegde with you, if you want to follow for new posts
          please subscribe to my newsletter, and stay on top of the news.
          See some of the most famous posts by clicking in the button below!
        </LargeTextRegular>
        <Button variant="small">Learn More</Button>
      </About>
    </Container>
  )
}