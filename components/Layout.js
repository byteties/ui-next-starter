import { Button } from 'antd'
import styles from '../styles/components/layout.module.scss'


export default function Layout({ children }) {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 >
          <a>Welcome to Shop Management</a>
        </h1>

        <p >
          ร้านค้าขนมและเครื่องดื่ม
        </p>
        <div className="row">
          <div className="col">
            <Button type="primary" shape="round" size="large">Get Started</Button>
          </div>
          <div className="col">
            <Button type="primary" shape="round" size="large">Talk To Us</Button>
          </div>
        </div>
        <div className={styles.grid}>
            <a className={styles.card}>
              <h4>สินค้าทั้งหมด &rarr;</h4>
            </a>
        </div>
      </div>
    </div>
    </>
  )
}