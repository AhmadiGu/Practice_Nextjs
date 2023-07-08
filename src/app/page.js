import ServerTest from '@/components/serverside'
import styles from './page.module.css'
import Test from '@/components/test'

export default function Home() {
  return (
    <main className={styles.main}>
      <Test />
      <ServerTest />
    </main>
  )
}
