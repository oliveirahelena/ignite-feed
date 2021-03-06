import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
      { type: 'link', content: 'π jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-18 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/oliveirahelena.png',
      name: 'Helena Oliveira',
      role: 'CTO @ Informach'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
      { type: 'link', content: 'π jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-16 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/juliofelipe.png',
      name: 'JΓΊlio Felipe',
      role: 'CTO @ Informach'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa π'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Γ um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Γ© DoctorCare π'},
      { type: 'link', content: 'π jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-06-15 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
