import styles from '../styles/components/header.module.scss'
import { Button,Layout,Row, Col } from 'antd'

const { Header } = Layout;


export default function HeaderMain() {
  return (
    <Header className={styles.container}>
      <Row >
        <Col span={6}>
          <a className={styles.text}>Logo</a>
        </Col>
        <Col span={12}>
          <Row justify="space-around" align="middle">
            <Col ><a className={styles.text}>Product</a></Col>
            <Col ><a className={styles.text}>Solution</a></Col>
            <Col ><a className={styles.text}>Pricing</a></Col>
            <Col ><a className={styles.text}>Company</a></Col>
            <Col ><a className={styles.text}>Contract</a></Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row justify="end">
            <Col ><a className={styles.text}>Sign In</a></Col>
            <Col ><a className={styles.text}>Sign Up</a></Col>
          </Row>
        </Col>
      </Row>
    </Header>
  )
}