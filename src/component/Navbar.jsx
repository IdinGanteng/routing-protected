import { CustomerServiceOutlined,
    AppstoreOutlined,
    TeamOutlined,
    SettingOutlined,
    LogoutOutlined,
    HomeOutlined,
    
  } from '@ant-design/icons';
import { Layout,Menu,Button,notification,Rate} from "antd";

import React from "react";
import { useNavigate } from "react-router";
import { userLogout } from '../service';

const close = () => {
  console.log(
    'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

const openNotification = () => {
  const rate = () => <Rate />; 
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Confirm
    </Button>
  );
  notification.open({
    message: 'Notification Title',
    description:
      'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
    btn,
    key,
    rate,
    onClose: close,
  });
};

const Navbar = () => {
const navigate = useNavigate();
const logout = () => userLogout(navigate)
return (

<Layout>
 <Menu mode="horizontal" theme='dark' style={{ position: 'fixed', zIndex: 1, width: '100%'}} >
   <Menu.Item key="mail" icon={<HomeOutlined />} 
              onClick={()=>navigate("/home")} defaultSelectedKeys={['mail']}>
      Home
   </Menu.Item>
   <Menu.Item key="about" icon={<TeamOutlined />}
              onClick={()=>navigate('/about')} defaultSelectedKeys={['about']}>
      Tentang Kami
   </Menu.Item>
 
   <Menu.SubMenu key="SubMenu" title="Liyone" style={{paddingLeft:'70%'}} icon={<SettingOutlined />}>
     <Menu.Item key="two" icon={<CustomerServiceOutlined/>}>
       Layanan Customor
     </Menu.Item>
     <Menu.Item key="three" onClick={openNotification} icon={<AppstoreOutlined />}>
       Skuy
     </Menu.Item>
     <Menu.Item onClick={() => logout()} icon={<LogoutOutlined/>}>
       Log Out
     </Menu.Item>
   </Menu.SubMenu>

 </Menu>
</Layout>

);
};
export default Navbar;