import React from 'react';
import logo from '../../assets/logo.png'
import styles from './Header.module.css';
import {
  Layout,
  Typography,
  Input,
  Menu,
  Button,
  Dropdown
} from 'antd';
import { GlobalOutlined } from '@ant-design/icons'

export const Header: React.FC = () => {
  return (
    <div className={styles['app-header']}>
      {/* top-header */}
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>让皮皮更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft :15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>English</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button>注册</Button>
            <Button>登录</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <img src={logo} alt="logo" className={styles['App-logo']}/>
        <Typography.Title level={3} className={styles.title}>LUJINGXI旅游网</Typography.Title>
        <Input.Search
          placeholder={'请输入旅游目的地'}
          className={styles['search-input']}
        />
      </Layout.Header>
      <Menu mode={'horizontal'} className={styles['main-menu']}>
        <Menu.Item key={1}>旅游周末</Menu.Item>
        <Menu.Item key={2}>旅游周末</Menu.Item>
        <Menu.Item key={3}>旅游周末</Menu.Item>
        <Menu.Item key={4}>旅游周末</Menu.Item>
        <Menu.Item key={5}>旅游周末</Menu.Item>
        <Menu.Item key={6}>旅游周末</Menu.Item>
        <Menu.Item key={7}>旅游周末</Menu.Item>
        <Menu.Item key={8}>旅游周末</Menu.Item>
        <Menu.Item key={9}>旅游周末</Menu.Item>
        <Menu.Item key={10}>旅游周末</Menu.Item>
        <Menu.Item key={11}>旅游周末</Menu.Item>
        <Menu.Item key={12}>旅游周末</Menu.Item>
        <Menu.Item key={13}>旅游周末</Menu.Item>
        <Menu.Item key={14}>旅游周末</Menu.Item>
      </Menu>
    </div>
  )
}
