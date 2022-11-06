import type { NextPage } from 'next'
import Image from 'next/future/image'
import { Header } from '../../components/Header'
import { ArticleContainer, ArticleContent, ArticleFooter, ArticleHeader, ArticleThemesAndShare, Author, AuthorWithDescription, Comments, Comment, Container, TitleContainer, Separator, CommentActions, Replies, Reply, LeaveCommentForm, TextArea, ReplyComment, ReadTime } from '../../styles/pages/articles/article'
import {ExtraSmallTextRegular, H1, H4, NormalTextRegular, SmallTextRegular } from '../../styles/texts'
import UnknownAvatar from '../../assets/unknown.webp'
import ReactMarkdown from "react-markdown"
import { fetchAPI } from '../../lib/api'
import Link from 'next/link'
import { CommentsQuantity } from '../../components/CommentsQuantity'
import { Contact } from '../../components/Contact'
import remarkGfm from 'remark-gfm'
import { ShareSocialMedias } from '../../components/ShareSocialMedias'
import { ArticleTheme } from '../../components/ArticleTheme'
import { HiOutlineReply } from 'react-icons/hi'
import { BiTimeFive } from 'react-icons/bi'
import { FormEvent, useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../styles/pages/articles/article'
import { v4 as uuid } from 'uuid'
import { formatDate } from '../../helpers/formatDate'
import { getStrapiMedia } from '../../lib/media'
import rehypeRaw from 'rehype-raw'

type Reply = {
  id: string
  author: string
  publishedAt: string
  commentText: string
}

type Comment = {
  id: string
  author: string
  publishedAt: string
  commentText: string
  replies?: Reply[]
}

interface FormCommentTarget extends EventTarget {
  comment: {
    value: string
  }
  name: {
    value: string
  }
  email: {
    value: string
  }
}

interface FormComment extends FormEvent<HTMLFormElement> {
  target: FormCommentTarget
}

const Article: NextPage = ({ article, categories, author, apiComments, articleImage }: any) => {
  const [comments, setComments] = useState<Comment[]>(apiComments)
  const [currentExpandedComment, setCurrentExpandedComment] = useState<string>('')
  const [currentReplyId, setCurrentReplyId] = useState<string>('')

  const handleShowReplies = (id: string) => {
    setCurrentExpandedComment(id)
  }

  const handleHideReplies = () => {
    setCurrentExpandedComment('')
  }

  const handleShowReplyComment = (id: string) => {
    setCurrentReplyId(id)
  }

  const handleHideReplyComment = (id: string) => {
    setCurrentReplyId('')
  }

  const handleLeaveComment = async (event: FormComment) => {
    event.preventDefault()

    const comment = {
      slug: uuid(),
      author: event.target.name.value,
      commentText: event.target.comment.value,
    }

    const response = await fetchAPI({
      path: '/comments',
      options: {
        method: "POST",
        body: JSON.stringify({
          data: {
            slug: comment.slug,
            email: event.target.email.value,
            author: comment.author,
            commentText: comment.commentText,
            article: [article.id]
          }
        })  
      }
    })

    const mergedComment: Comment = {
      id: response.data.id,
      author: comment.author,
      commentText: comment.commentText,
      publishedAt: response.data.attributes.publishedAt
    } 

    setComments((state) => {
      return [
        ...state,
        { ...mergedComment }
      ]
    })
  }

  const calcReadTime = (letters: number) => {
    const averageWords = 238
    const averageLettersInWord = 4.7

    return Math.round(letters / averageWords / averageLettersInWord)
  }


  const handleReplyComment = async (event: FormComment, commentId: string) => {
    event.preventDefault()

    const reply = {
      slug: uuid(),
      author: event.target.name.value,
      commentText: event.target.comment.value,
    }

    const response = await fetchAPI({
      path: '/replies',
      options: {
        method: "POST",
        body: JSON.stringify({
          data: {
            slug: reply.slug,
            email: event.target.email.value,
            author: reply.author,
            commentText: reply.commentText,
            comment: [commentId]
          }
        })  
      }
    })

    const mergedReply: Reply = {
      id: response.data.id,
      author: reply.author,
      commentText: reply.commentText,
      publishedAt: response.data.attributes.publishedAt
    }

    setComments(state => state.map(el =>
      el.id === commentId ? {
        ...el,
        replies: el.replies ? [
          ...el.replies, {
            ...mergedReply
          }
        ] : [{ ...mergedReply  }]
      } : el
    ))

    setCurrentReplyId('')
  }

  const normalizeHref = (href: string) => {
    if(href.slice(-1) === '/') {
      let normalizedHref = href
      while(normalizedHref.slice(-1) === '/') {
        normalizedHref = normalizedHref.slice(0, -1)
      }
      return normalizedHref
    }

    return href
  }

  return (
    <>
      <Header />
      <Container>
        <TitleContainer>
          <div>
            <span />
            <p>News / Article</p>
          </div>
          <H1>
            We started as a small group of design
          </H1>
        </TitleContainer>
        <ShareSocialMedias socialMediaUrls={author.socialMediaUrls} className="top-share-social-medias" />
        <Image
          width={articleImage.data.attributes.width}
          height={articleImage.data.attributes.height}
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          src={getStrapiMedia(articleImage)}
          alt="Article Image"
        />
        <ArticleContainer>
          <ArticleHeader>
            <Author>
              <Image src={author.picture ? getStrapiMedia(author.picture) : UnknownAvatar} width={40} height={40} alt="Author Image" />
              <Link href="#">
                <a target="_blank">{author.name}</a>
              </Link>
            </Author>
            <div>
              <SmallTextRegular>Added: {formatDate('pt-BR', new Date())}</SmallTextRegular>
              <ReadTime>
                <BiTimeFive />
                <SmallTextRegular>{calcReadTime(article.attributes.content.length)} min read</SmallTextRegular>
              </ReadTime>
              <CommentsQuantity quantity={comments.length} />
            </div>
          </ArticleHeader>
          <ArticleContent>
            <ReactMarkdown  linkTarget="_blank" remarkPlugins={[remarkGfm]} rehypePlugins={[[rehypeRaw]]} components={{
              a: ({ node, href, children, ...props }) => 
                <Link href={href ? normalizeHref(href) : '#'}>
                  <a {...props}>
                    {children}
                  </a>
                </Link>
            }}>
              {article.attributes.content}
            </ReactMarkdown>
          </ArticleContent>
          <ArticleFooter>
            <AuthorWithDescription>
              <Image src={author.picture ? getStrapiMedia(author.picture) : UnknownAvatar} width={56} height={56} alt="Author Image" />
              <div>
                <Link href="#">
                  <a target="_blank">{author.name}</a>
                </Link>
                <NormalTextRegular>
                  {author.description}
                </NormalTextRegular>
              </div>
            </AuthorWithDescription>
            <ArticleThemesAndShare>
                <ArticleTheme theme={article.attributes.category.data.attributes.name} variant='non-filled' />
              <ShareSocialMedias socialMediaUrls={author.socialMediaUrls}/>
            </ArticleThemesAndShare>
            {/* <Navigation>
              <div>
                <Link href="#">
                  <a>
                    <BsArrowLeft />
                    <span>PREVIOUS ARTICLE</span>
                  </a>
                </Link>
                <ExtraSmallTextBold>
                  Aliquam auctor, eros non consectetur malesuada, nisl mauris convallis nulla, ac molestie sem nulla id sapien
                </ExtraSmallTextBold>
              </div>
              <div>
                <Link href="#">
                  <a>
                    <span>NEXT ARTICLE</span>
                    <BsArrowRight />
                  </a>
                </Link>
                <ExtraSmallTextBold>
                  Aliquam auctor, eros non consectetur malesuada, nisl mauris convallis nulla, ac molestie sem nulla id sapien
                </ExtraSmallTextBold>
              </div>
            </Navigation> */}
          </ArticleFooter>
        </ArticleContainer>
        <Comments>
          {/* <Separator /> */}
          <H4>Comments ({comments.length})</H4>
          {comments.map(comment => (
            <Comment key={comment.id}>
              <AuthorWithDescription className="author-comment">
                <Image src={UnknownAvatar} width={56} height={56} alt="Author Image" />
                <div>
                  <Link href="#">
                    <a target="_blank">{comment.author}</a>
                  </Link>
                  <SmallTextRegular>
                    December {formatDate('pt-BR', new Date(comment.publishedAt))}
                  </SmallTextRegular>
                </div>
              </AuthorWithDescription>
              <SmallTextRegular className="comment-text">
                {comment.commentText}
              </SmallTextRegular>
              <CommentActions>
                <div>
                  <HiOutlineReply />
                  {currentReplyId === comment.id ? (
                    <span onClick={() => handleHideReplyComment(comment.id)}>REPLYING</span>
                  ) : (
                    <span onClick={() => handleShowReplyComment(comment.id)}>REPLY</span>
                  )}
                </div>
                {comment.id === currentExpandedComment ? (
                  <span onClick={handleHideReplies}>Hide Replies</span>
                ) : (
                  <span onClick={() => comment.replies && handleShowReplies(comment.id)}>Replies ({comment.replies ? comment.replies.length : 0})</span>
                )}
              </CommentActions>
              {comment.replies && comment.id === currentExpandedComment && (
                <Replies>
                  {comment.replies.map(reply => (
                    <div key={reply.id}>
                      <Reply>
                        <AuthorWithDescription className="author-comment">
                          <Image src={UnknownAvatar} width={56} height={56} alt="Author Image" />
                          <div>
                            <Link href="#">
                              <a target="_blank">{reply.author}</a>
                            </Link>
                            <SmallTextRegular>
                              December {formatDate('pt-BR', new Date())}
                            </SmallTextRegular>
                          </div>
                        </AuthorWithDescription>
                        <SmallTextRegular className="comment-text">
                          {reply.commentText}
                        </SmallTextRegular>
                        <CommentActions>
                          <div>
                            <HiOutlineReply />
                            {currentReplyId === reply.id ? (
                              <span onClick={() => handleHideReplyComment(reply.id)}>REPLYING</span>
                            ) : (
                              <span onClick={() => handleShowReplyComment(reply.id)}>REPLY</span>
                            )}
                          </div>
                        </CommentActions>
                      </Reply>
                      {currentReplyId === reply.id && (
                        <ReplyComment onSubmit={(event: FormComment) => handleReplyComment(event, comment.id)}>
                          <TextArea name="comment" placeholder="Leave your comment" maxLength={500} required />
                          <div>
                            <Input name="name" placeholder="Name *" required />
                            <Input name="email" type="email" placeholder="E-mail *" required />
                          </div>
                          <Button variant="medium">Reply Comment</Button>
                        </ReplyComment>
                      )}
                    </div>
                  ))}
                </Replies>
              )}
              {currentReplyId === comment.id && (
                <ReplyComment onSubmit={(event: FormComment) => handleReplyComment(event, comment.id)}>
                  <TextArea name="comment" placeholder="Leave your comment" maxLength={500} required />
                  <div>
                    <Input name="name" placeholder="Name *" required />
                    <Input name="email" placeholder="E-mail *" required />
                  </div>
                  <Button variant="medium">Reply Comment</Button>
                </ReplyComment>
              )}
            </Comment>
          ))}
          <LeaveCommentForm onSubmit={handleLeaveComment}>
            <H4>Leave a comment</H4>
            <ExtraSmallTextRegular>Your email address will not be published. Required fields are marked *</ExtraSmallTextRegular>
            <TextArea name="comment" placeholder="Leave your comment" maxLength={500} required />
            <div>
              <Input name="name" placeholder="Name *" required />
              <Input name="email" placeholder="E-mail *" required />
            </div>
            <Button variant="medium">Post Comment</Button>
          </LeaveCommentForm>
        </Comments>
      </Container>
      <Contact />
    </>
  )
}

export async function getStaticPaths() {
  const articlesRes = await fetchAPI({
    path: '/articles',
    urlParams: { fields: ["slug"] }
  })

  return {
    paths: articlesRes.data.map((article: any) => ({
      params: {
        slug: article.attributes.slug
      },
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const articlesRes = await fetchAPI({
    path: "/articles",
    urlParams: {
      filters: {
        slug: params.slug,
      },
      populate: {
        author: {
          populate: "*"
        },
        comments: {
          populate: "*"
        },
        image: {
          populate: '*'
        },
        category: {
          populate: '*'
        }
      },
    }
  })

  const categoriesRes = await fetchAPI({
    path: "/categories"
  })


  const comments = articlesRes.data[0].attributes.comments.data.map((comment: { id: number, attributes: any }) => ({
    id: comment.id,
    ...comment.attributes,
    replies: comment.attributes.replies.data.length ? 
      comment.attributes.replies.data.map((reply: { id: number, attributes: any }) => ({
        id: reply.id,
        ...reply.attributes
      })) : null
  }))

  const apiAuthor = articlesRes.data[0].attributes.author.data

  const author = {
    id: apiAuthor.id,
    ...apiAuthor.attributes
  }

  return {
    props: { article: articlesRes.data[0],  categories: categoriesRes, apiComments: comments, author, articleImage: articlesRes.data[0].attributes.image},
    revalidate: 60 * 2 // 2 Minutes
  }
}


export default Article
