import React, { use, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import UserInput from '../chat/UserInput';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';

// import Chat from '../components/Chat';
// import { useTranslation } from 'react-i18next';
// import { useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../redux/slices/userSlice';
// import { selectChat } from '../redux/slices/chatSlice';
// import { selectSettings } from '../redux/slices/settingsSlice';
// import { selectChatHistory } from '../redux/slices/chatHistorySlice';
// import { selectChatList } from '../redux/slices/chatListSlice';
// import { selectChatConfig } from '../redux/slices/chatConfigSlice';
// import { selectChatModel } from '../redux/slices/chatModelSlice';
// import { selectChatModelList } from '../redux/slices/chatModelListSlice';
// import { selectChatModelConfig } from '../redux/slices/chatModelConfigSlice';
// import { selectChatModelListConfig } from '../redux/slices/chatModelListConfigSlice';           

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];


const ChatContainer: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const dispatch = useDispatch<AppDispatch>();

  const messageSendHandler = (message:string)=>{
    setIsLoading(true);
    setIsDisabled(true);
    setTimeout(() => {
      console.log("Message sent:", message);
      setIsLoading(false);
      setIsDisabled(false);
    }
    , 7000); // Simulate a network request


  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} style={{ padding: '0.5vh' }}/>
      </Sider>
      <Layout>
        <Header style={{ padding: '0.5vh', background: colorBgContainer }} >This is Header</Header>
        
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'User' }, { title: 'Bill' }]} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            This is a chat
          </div>
          <UserInput onSendMessage={messageSendHandler}
          isLoading={isLoading}
          isDisabled={isDisabled}
          placeholder='Type your message...'/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Chatbot ©{new Date().getFullYear()} Created by Shruti
        </Footer>
      </Layout>
    </Layout>
  );
};

export default ChatContainer;
