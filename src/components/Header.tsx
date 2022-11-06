import Link from "next/link"
import { Container, IconsContainer, Logo, Topics, ToggleTheme } from "../styles/components/header"
import { VscSearch } from 'react-icons/vsc'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"

export const Header: React.FunctionComponent = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => 
    setTheme(theme === "light" ? "dark" : "light")

  return (
    <Container>
      <Logo>
        <Link href='/'>
          <a>
            Template Blog
          </a>
        </Link>
      </Logo>
      <Topics>
        <Link href="#" >
          <a>Home</a>
        </Link>
        <Link href="#">
          <a>About Me</a>
        </Link>
        <Link href="#">
          <a>Features</a>
        </Link>
        <Link href="#">
          <a>Cart</a>
        </Link>
        <Link href="#">
          <a>Contact Me</a>
        </Link>
        <VscSearch />
      </Topics>
      <IconsContainer>
        <VscSearch />
        <GiHamburgerMenu />
      </IconsContainer>
      <ToggleTheme {...(theme === 'light' ? {variant: 'light'} : {variant: 'dark'})} onClick={toggleTheme}>
        {theme === 'light' ? (
          <div>
            <BsFillSunFill />
          </div>
        ) :
          <div>
            <BsFillMoonStarsFill />
          </div>
        }
      </ToggleTheme>
    </Container>
  )
}