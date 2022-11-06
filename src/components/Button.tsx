import { Button as Container } from "../styles/components/button"

type ButtonProps = {
  variant: 'small' | 'medium',
  children: React.ReactNode
}

export const Button: React.FunctionComponent<ButtonProps> = ({ variant, children }) => {
  return (
    <Container variant={variant}>
      {children}
    </Container>
  )
}