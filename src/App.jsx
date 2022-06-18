import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Helena Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae magnam ratione repellat, ipsum totam illo ab optio illum. Ducimus a ipsum sed iure rerum? Impedit, ducimus corporis. Dolor, enim?"
          />
          <Post
            author="Júlio Felipe"
            content="New Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae magnam ratione repellat, ipsum totam illo ab optio illum. Ducimus a ipsum sed iure rerum? Impedit, ducimus corporis. Dolor, enim?"
          />
        </main>
      </div>
    </div>
  )
}
