import React, { useState } from 'react';
import { Layout, Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  BorderOuterOutlined,
  UnorderedListOutlined,
  SettingOutlined,
  UserAddOutlined,
  ShoppingCartOutlined,
  BarChartOutlined
} from '@ant-design/icons';

import './SideBar.scss';

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('sangtrandev', 'myprofile', <BorderOuterOutlined />),
  getItem('Dashboard', 'dashboard', <PieChartOutlined />),
  getItem('Categories', 'categories', <UnorderedListOutlined />, [getItem('Categories', 'categories')]),
  getItem('Courses', 'courses', <DesktopOutlined />, [getItem('Course Manager', 'courses')]),
  getItem('Orders', 'orders', <ShoppingCartOutlined />, [getItem('Order Manager', 'orders')]),
  getItem('Users', 'users', <UserOutlined />, [
    getItem('All Users', 'users'),
    getItem('Admins', 'admins'),
    getItem('Intructors', 'intructors')
  ]),
  getItem('Reports Center', 'reports', <BarChartOutlined />, [
    getItem(
      'User Analytics',
      'user-analytics',
      null,
      [
        getItem('User Progress', 'reports/users-progress'),
        getItem('User Segment', 'reports/users-segment'),
        getItem('Course Insights', 'reports/course-insights')
      ],
      'group'
    ),
    getItem(
      'Exams',
      'exams',
      null,
      [
        getItem('Certifications', 'reports/certifications'),
        getItem('Review center', 'reports/review-center'),
        getItem('Question bank', 'reports/questions-bank')
      ],
      'group'
    ),
    getItem(
      'Sales',
      'sales',
      null,
      [
        getItem('Orders', 'reports/orders'),
        getItem('Courses revenues', 'reports/courses-revenue'),
        getItem('Instructors Revenues', 'reports/instructors-revenue')
      ],
      'group'
    )
  ]),
  getItem('Setting', 'setting', <SettingOutlined />, [getItem('Settings', 'settings')]),
  getItem('My account', 'account', <UserAddOutlined />),
  getItem('Need Help ?', 'help', <FileOutlined />)
];

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigateHandler: MenuProps['onClick'] = (e) => {
    console.log('click', e);
    navigate(e.key);
    setOpenDrawer(true);
  };

  return (
    <Sider
      className='sidebar'
      style={{ backgroundColor: '#fff' }}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className='demo-logo-vertical' />
      <Menu
        className='sidebar__menu'
        onClick={navigateHandler}
        theme='light'
        defaultSelectedKeys={['1']}
        mode='inline'
        items={items}
      />
    </Sider>
  );
};

export default SideBar;
