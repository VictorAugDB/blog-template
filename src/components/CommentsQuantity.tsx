import Link from "next/link"
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { Container, Comments } from "../styles/components/comments-number";

type CommentsQuantity = {
  quantity: number
}

export const CommentsQuantity: React.FunctionComponent<CommentsQuantity> = ({ quantity }) => {
  return (
    <Container>
      <HiOutlineChatAlt2 />
      <Comments>{quantity}</Comments>
    </Container>
  )
}