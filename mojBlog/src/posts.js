import {users} from './users.js';
export const posts = [
  window.posts = [
    {
      id: 'post1',
      title: 'Przepis na zupę',
      author: users[0],
      body: 'Tutaj opisuję przepis na super zupę',
      dateAdded: new Date(2020, 02, 26),
      views: 4,
    },
    {
      id: 'post2',
      title: 'Przepis na ciasto',
      author: users[1],
      body: 'Tutaj opisuję przepis na ciasto orzechowe z orzechów włoskich',
      dateAdded: new Date(2020, 02, 27),
      views: 5,
    }, {
      id: 'post3',
      title: 'Przepis na mohito',
      author: users[2],
      body: 'Tutaj opisuję przepis na drinka mohito',
      dateAdded: new Date(2020, 02, 28),
      views: 5,
    },
  ]
]
export default posts