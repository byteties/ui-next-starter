import styles from '../styles/components/header.module.scss'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className="row justify-content-between">
          <div className="col-3">
            <a className={styles.text}>Logo</a>
          </div>
          <div className="col-6 text-center">
            <div className="row justify-content-around">
              <div className="col"><a className={styles.tabbar}>Product</a></div>
              <div className="col"><a className={styles.tabbar}>Solution</a></div>
              <div className="col"><a className={styles.tabbar}>Pricing</a></div>
              <div className="col"><a className={styles.tabbar}>Company</a></div>
              <div className="col"><a className={styles.tabbar}>Contract</a></div>
            </div>
          </div>
          <div className="col-3 align-items-end">
            <div className="d-flex justify-content-end">
              <a className={styles.text}>SignIn</a>
              <a className={styles.text}>SignUp</a>
            </div>
          </div>
      </div>
    </div>
  )
}