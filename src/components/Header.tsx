import Link from "next/link"
import { Container, IconsContainer, Logo, Topics, ToggleTheme, ToggleMenu } from "../styles/components/header"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useTheme } from "next-themes";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import { useEffect, useState } from "react";

export const Header: React.FunctionComponent = () => {
  const { theme, setTheme } = useTheme()
  const [ defaultTheme, setDefaultTheme ] = useState("light")
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  

  const toggleTheme = () => {
    setDefaultTheme(theme === "light" ? "dark" : "light")

    setTheme(theme === "light" ? "dark" : "light")
  }
    

  const handleOpenMenu = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  useEffect(() => {
    if(theme === "dark") {
      setDefaultTheme("dark")
    }
  }, [])

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
      </Topics>
      <IconsContainer>
        {isMenuOpened ? (
          <ToggleMenu variant='opened'>
            <GiHamburgerMenu onClick={handleOpenMenu}/>
            
            <Topics>
              <Link href="#" >
                <a>Home</a>
              </Link>
              <Link href="#">
                <a>About Me</a>
              </Link>
            </Topics>
          </ToggleMenu>
        ) : (
          <ToggleMenu variant='closed'>
            <GiHamburgerMenu onClick={handleOpenMenu}/>
          </ToggleMenu>
        )}
      </IconsContainer>
      {
        
        <ToggleTheme variant={defaultTheme === "light" ? "light" : "dark"} onClick={toggleTheme}>
        <div>
          {
            defaultTheme === "light" ? <BsFillSunFill /> : <BsFillMoonStarsFill />
          }
        </div>
      </ToggleTheme>
        
      }
    </Container>
  )
}