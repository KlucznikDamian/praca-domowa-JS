import { users } from './users.js'
import { posts } from './posts.js'
export const comments = [
  {
    id: 'comment1',
    author: users[1],
    post: posts[0],
    body: 'super przepis, napewno spróbuję',
    dateAdded: new Date(2020, 2, 5),
    dateModification: new Date(2020, 2, 6),
    like: 0,
    dislike: 1
  },
  {
    id: 'comment2',
    author: users[0],
    post: posts[1],
    body: 'czy to muszą być orzechy włoskie czy mogą być ziemne?',
    dateAdded: new Date(2020, 2, 28),
    dateModification: new Date(2020, 2, 28),
    like: 1,
    dislike: 1
  },
  {
    id: 'comment3',
    author: users[0],
    post: posts[2],
    body: 'takie przepisy to ja lubię',
    dateAdded: new Date(2020, 2, 28),
    dateModification: new Date(2020, 2, 28),
    like: 2,
    dislike: 0
  }
]
export default comments
