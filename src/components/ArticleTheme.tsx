import Link from "next/link"
import { Container } from "../styles/components/article-theme"

type ArticleThemeProps = {
  theme: string
  variant?: 'filled' | 'non-filled'
}

export const ArticleTheme: React.FunctionComponent<ArticleThemeProps> = ({ theme, variant = 'filled' }) => {
  return (
    <Container variant={variant}>
      <p>{theme}</p>
    </Container>
  )
}