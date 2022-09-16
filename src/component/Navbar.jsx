import { CustomerServiceOutlined,
    AppstoreOutlined,
    TeamOutlined,
    SettingOutlined,
    LogoutOutlined,
    HomeOutlined,
    
  } from '@ant-design/icons';
import { Layout,Menu} from "antd";

import React from "react";
import { useNavigate } from "react-router";

 const Navbar = () => {
const navigate = useNavigate();
const logout = () => {
    localStorage.removeItem('username');
    navigate('/login');
};
return (

<Layout>
 <Menu mode="horizontal" theme='dark' style={{ position: 'fixed', zIndex: 1, width: '100%'}} >
   <Menu.Item key="mail" icon={<HomeOutlined />} defaultSelectedKeys={['mail']}>
      Home
   </Menu.Item>
   <Menu.Item key="about" icon={<TeamOutlined />} defaultSelectedKeys={['about']}>
      Tentang Kami
   </Menu.Item>
 
   <Menu.SubMenu key="SubMenu" title="Liyone" style={{paddingLeft:'70%'}} icon={<SettingOutlined />}>
     <Menu.Item key="two" icon={<CustomerServiceOutlined/>}>
       Layanan Customor
     </Menu.Item>
     <Menu.Item key="three" icon={<AppstoreOutlined />}>
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