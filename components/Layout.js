import { Button,Layout,Card,Row,Col } from 'antd'
import { CaretLeftOutlined,CaretRightOutlined } from '@ant-design/icons';
import PandaIcon from '../public/panda'
import styles from '../styles/components/layout.module.scss'
import Header from '../components/Header'
// import Conversation from '../public/images/card-conversation-ai.svg'
// import Relevance from '../public/images/card-relevance-personalization.svg'
// import Retail from '../public/images/card-retail.svg'
// import Car from '../public/images/card-self-driving-cars.svg'
import Image from 'next/image'

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
              <Row><h1>Chayangkoon Dokhom</h1></Row>
              <Row><h5>It' s my beginning website for me</h5></Row>
            </Col>
            <Col span={12}>
              <Row className={styles.row} justify="end" align="middle">
                <Col>                
                  <Button className={styles.start} shape="round" size="large"><p>Get Started</p></Button>
                </Col>
                <Col offset={2}>
                  <Button shape="round" size="large">Talk To Us</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className={styles.section} justify="space-around" align="middle">
            <Col>
              <Card className={styles.card}
                cover={
                <Image
                  src="/images/profile.jpg"
                  width={250} 
                  height={306} 
                />}
                actions={[
                  <CaretLeftOutlined />,
                  <CaretRightOutlined />,
                ]}
              >
                <Card.Meta
                  avatar={<PandaIcon style={{ fontSize: '32px' }} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col>
              <Card className={styles.card}
                cover={
                <Image
                  src="/images/profile.jpg"
                  width={250} 
                  height={306}   
                />}
                actions={[
                  <CaretLeftOutlined />,
                  <CaretRightOutlined />,
                ]}
              >
                <Card.Meta
                  avatar={<PandaIcon style={{ fontSize: '32px' }} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
            <Col>
              <Card className={styles.card}
                cover={
                <Image
                  src="/images/profile.jpg"
                  width={250} 
                  height={306} 
                />}
                actions={[
                  <CaretLeftOutlined />,
                  <CaretRightOutlined />,
                ]}
              ><Card.Meta
                avatar={<PandaIcon style={{ fontSize: '32px' }} />}
                title="Card title"
                description="This is the description"
              />
            </Card>
            </Col>
            <Col>
              <Card className={styles.card}
                cover={
                <Image
                  src="/images/profile.jpg"
                  width={250} 
                  height={306}   
                />}
                actions={[
                  <CaretLeftOutlined />,
                  <CaretRightOutlined />,
                ]}
              >
                <Card.Meta
                  avatar={<PandaIcon style={{ fontSize: '32px' }} />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
    
    </>
  )
}