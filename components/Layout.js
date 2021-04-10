import { Button,Layout,Card,Row,Col } from 'antd'
import styles from '../styles/components/layout.module.scss'
import Header from '../components/Header'
import Conversation from '../public/images/card-conversation-ai.svg'
import Relevance from '../public/images/card-relevance-personalization.svg'
import Retail from '../public/images/card-retail.svg'
import Car from '../public/images/card-self-driving-cars.svg'

const { Content } = Layout;


export default function LayoutMain({ children }) {
  return (
    <>
    <Layout>
      <Header />
      <Content className={styles.container}>
        <div className={styles.body}>
          <Row className={styles.section}>
            <Col span={12}>
              <Row><h1>Welcome to Shop Management</h1></Row>
              <Row>ร้านค้าขนมและเครื่องดื่ม</Row>
            </Col>
            <Col span={12}>
              <Row className={styles.row} justify="end" align="middle">
                <Col>                
                  <Button type="primary" shape="round" size="large">Get Started</Button>
                </Col>
                <Col offset={2}>
                  <Button type="primary" shape="round" size="large">Talk To Us</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={styles.section}>
            <Card className={styles.card}>
              <Conversation className={styles.svg}/>
            </Card>
            <Card className={styles.card}>
              <Relevance className={styles.svg}/>
            </Card>
            <Card className={styles.card}>
              <Retail className={styles.svg}/>
            </Card>
            <Card className={styles.card}>
              <Car className={styles.svg}/>
            </Card>
          </Row>
        </div>
      </Content>
    </Layout>
    
    </>
  )
}