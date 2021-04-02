import styles from '../styles/components/layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
    <div className={styles.container}>
      <main >
        <h1 >
          <a>Welcome to Shop Management</a>
        </h1>

        <p >
          ร้านค้าขนมและเครื่องดื่ม
        </p>

        <div className={styles.grid}>
            <a className={styles.card}>
              <h3>สินค้าทั้งหมด &rarr;</h3>
            </a>
        </div>
      </main>
    </div>
    </>
  )
}