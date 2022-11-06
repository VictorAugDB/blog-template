import { darken } from "polished";
import { styled } from "../..";
import { rem } from "../../../helpers/convertPixelToRem";

export const Container = styled('div', {
  padding: `${rem(50)} ${rem(20)} 0`,

  '.top-share-social-medias': {
    marginTop: rem(56),
    marginBottom: rem(48),
  },

  '@md': {
    padding: `${rem(83)} ${rem(135)} 0`
  },
})

export const TitleContainer = styled('div', {
  div: {
    display: 'flex',
    alignItems: 'center',
    gap: rem(16),
    marginBottom: rem(50),

    span: {
      height: rem(1),
      width: rem(100),
      backgroundColor: 'black'
    },

    p: {
      fontSize: rem(20),
      lineHeight: rem(28)
    }
  },
})



export const ArticleContainer = styled('div', {
  padding: 0,
  
  '@lg': {
    padding: `0 ${rem(201)}`
  },
})

export const ArticleHeader = styled('div', {
  margin: `${rem(40)} 0`,

  '> div:last-child': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: rem(21),

    p: {
      color: '$slate500'
    }
  }
})

export const ReadTime = styled('div', {
  display: 'flex',
  gap: '8px',
  alignItems: 'center'
})

export const Author = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: rem(10),

  img: {
    borderRadius: '50%'
  },

  a: {
    fontSize: rem(22),
    lineHeight: rem(28),
    color: '$slate900',
    wordBreak: 'break-word',
    fontWeight: 700
  }
})

export const ArticleContent = styled('div', {
  h1: {
    fontSize: rem(48),
    lineHeight: rem(64),

    '@sm': {
      fontSize: rem(96),
      lineHeight: rem(128),
    }
  },

  h2: {
    fontSize: rem(24),
    lineHeight: rem(34),
    
    '@sm': {
      fontSize: rem(60),
      lineHeight: rem(88)
    }
  },

  h3: {
    fontSize: rem(40),
    lineHeight: rem(56)
  },

  h4: {
    fontSize: rem(30),
    lineHeight: rem(44)
  },

  h5: {
    fontSize: rem(24),
    lineHeight: rem(34)
  },

  p: {
    fontSize: rem(16),
    lineHeight: rem(28),
    fontWeight: '400'
  },

  h6: {
    fontSize: rem(20),
    lineHeight: rem(34)
  },

  a: {
    color: '$cyan600',
  },

  'p:has(a):has(img)': {
    display: 'flex',
    justifyContent: 'center',
    margin: `${rem(8)} 0`,
    position: 'relative',
  },

  'p > a:has(img)': {
    border: 0
  },

  'p > a > img': {
    margin: '0 auto',
    width: '100%',
    maxWidth: 500,
    height: 'auto'
  }
})

export const ArticleFooter = styled('div', {
  marginTop: rem(176)
})

export const ArticleThemesAndShare = styled('div', {
  marginTop: rem(18),
  marginBottom: rem(51),
  padding: `${rem(34)} 0 ${rem(32)}`,
  display: 'flex',
  gap: rem(24),
  flexDirection: 'column',
  alignItems: 'center',
  border: 'solid $gray400',
  borderWidth: '1px 0 1px',

  '@sm': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

// export const Navigation = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: rem(24),
//   alignItems: 'center',

//   '@sm': {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },

//   '> div': {
//     paddingBottom: rem(15),
//     maxWidth: rem(301),

//     a: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       gap: rem(8),
//       padding: `${rem(4)} 0`,
//       width: 'fit-content',

//       '@sm': {
//         justifyContent: 'flex-start'
//       },

//       span: {
//         fontSize: rem(14),
//         lineHeight: rem(24),
//         color: '$slate500'
//       },

//       svg: {
//         color: '$slate500'
//       }
//     },

//     p: {
//       textAlign: 'center',
//       marginTop: rem(8),
  
//       '@sm': {
//         textAlign: 'left'
//       }
//     }
//   },

//   '> div:last-child': {
//     a: {
//       '@sm': {
//         marginLeft: 'auto'
//       },
//     },

//     p: {  
//       '@sm': {
//         textAlign: 'right'
//       }
//     }
//   }
// })

export const AuthorWithDescription = styled(Author, {
  alignItems: 'flex-start',
  
  p: {
    color: "$slate500"
  },
})

export const Comments = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: rem(30),
  padding: `${rem(50)} 0`,

  '@lg': {
    padding: `${rem(50)} ${rem(201)} 0`,
  },

  h4: {
    marginTop: rem(19),
    marginBottom: rem(8)
  }
})

export const Comment = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  backgroundColor: '$white',
  padding: `${rem(15)} ${rem(15)}`,
  boxShadow: '0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16);',

  '@sm': {
    padding: `${rem(15)} ${rem(30)}`,
  },

  '.comment-text': {
    margin: `${rem(16)} 0 ${rem(20)} 0`
  },

  '.author-comment': {
    img: {
      width: rem(40),
      height: rem(40)
    },

    padding: `${rem(20)} 0`
  }
})

export const CommentActions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'end',
  gap: rem(35),

  div: {
    display: 'flex',
    alignItems: 'center',
    padding: `${rem(4)} 0`,
    gap: rem(6),
    cursor: 'pointer',
    transition: 'color 0.2s',

    color: '$cyan600',

    span: {
      fontSize: rem(14),
      lineHeight: rem(24),
    },

    svg: {
      width: rem(16),
      height: rem(16)
    },

    '&:hover': {
      color: darken(0.05, '#00E6CA')
    }
  },

  '> span': {
    display: 'inline-block',
    fontSize: rem(14),
    lineHeight: rem(32),
    color: '$slate500',
    cursor: 'pointer',
    transition: 'color 0.2s',

    '&:hover': {
      color: darken(0.2, '#7B7485')
    }
  }
})

export const Separator = styled('div', {
  width: '100%',
  height: rem(1),
  backgroundColor: '$gray400'
})

export const Replies = styled('div', {
  marginTop: rem(20),
  display: 'flex',
  flexDirection: 'column',
  gap: rem(20),

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: rem(20)
  }
})


export const Reply = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  backgroundColor: '$gray400',
  padding: `${rem(15)} ${rem(15)}`,
  boxShadow: '0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16);',

  '@sm': {
    padding: `${rem(15)} ${rem(30)}`,
  },

  '.author-comment': {
    img: {
      width: rem(32),
      height: rem(32)
    },


    padding: `${rem(20)} 0`
  },

  '.comment-text': {
    margin: `${rem(16)} 0 ${rem(20)} 0`,
  },
})

export const ReplyComment = styled('form', {
  'textarea, input': {   
    '&:focus, &:hover, &:not(:placeholder-shown)': {
      borderColor: '$cyan600',
    },
  },

  div: {
    margin: `${rem(16)} 0`,
    display: 'flex',
    gap: rem(60)
  },

  button: {
    maxWidth: '100%'
  }
})

export const LeaveCommentForm = styled('form', {
  '> p': {
    margin: `${rem(34)} 0 ${rem(40)}`
  },

  div: {
    margin: `${rem(30)} 0 ${rem(66)}`,
    display: 'flex',
    gap: rem(60)
  },

  'textarea, input': {   
    '&:focus, &:hover, &:not(:placeholder-shown)': {
      borderColor: '$cyan600',
    },
  },

  button: {
    maxWidth: '100%'
  }
})

export const TextArea = styled('textarea', {
  width: '100%',
  height: rem(204),
  borderBottom: '1px solid $black',
  resize: 'none',
  backgroundColor: '$gray400',
  padding: `${rem(12)} ${rem(10)}`,
})

export const Input = styled('input', {
  width: '100%',
  padding: rem(10),
  borderBottom: '1px solid $black',
  backgroundColor: '$gray400',
})
