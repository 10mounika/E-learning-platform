import React from 'react';
import './Profile.scss';
import { Col, Row, Tabs, TabsProps } from 'antd';
// type Props = {}
import { ReadOutlined } from '@ant-design/icons';
import Button from '../../../components/Button';
import { UserOutlined, StockOutlined } from '@ant-design/icons';

const profileItems: TabsProps['items'] = [
  {
    key: 'about',
    label: (
      <div className='tab-item'>
        <p className='tab-item__text'>
          <UserOutlined className='tab-item__icon' />
        </p>
        <p>About</p>
      </div>
    ),
    children: `Content of Tab Pane 1`
  },
  {
    key: 'activity',
    label: (
      <div className='tab-item'>
        <p className='tab-item__text'>
          <StockOutlined className='tab-item__icon' />
        </p>
        <p>Activities</p>
      </div>
    ),
    children: `Content of Tab Pane 2`
  }
];

const tabBarStyleCss = {
  padding: '2rem',
  fontSize: '2.4rem',
  bacgroundColor: '#194583'
};

const Profile = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className='profile'>
      <div className='profile__wrap '>
        <div className='profile__header'>
          <div className='container profile__header-wrap'>
            <Row>
              <Col md={4}>
                <div className='profile__header-item'>
                  <div className='profile__header-item-icon'>
                    <ReadOutlined />
                  </div>
                  <div className='profile__header-item-number'>3</div>
                  <div className='profile__header-item-text'>Courses</div>
                </div>
              </Col>
              <Col md={4}>
                <div className='profile__header-item'>
                  <div className='profile__header-item-icon'>
                    <ReadOutlined />
                  </div>
                  <div className='profile__header-item-number'>3</div>
                  <div className='profile__header-item-text'>Courses</div>
                </div>
              </Col>
              <Col md={8}>
                <div className='profile__header-item'>
                  <div className='profile__header-item-icon'>
                    <img
                      src='https://lwfiles.mycourse.app/648eaf1c0c0c35ee7db7e0a2-public/avatars/648eaf1c0c0c35ee7db7e0a3.jpg?version=2023-07-16%2010%3A02%3A03'
                      alt=''
                      className='profile__header-item-img'
                    />
                  </div>
                  <div className='profile__header-item-name'>
                    <div className='profile__header-item-name-text'>Tran Nhat Sang</div>
                    <div className='profile__header-item-name-badge'>Staff</div>
                  </div>
                  <div className='profile__header-item-btn-wrap'>
                    <Button className=' profile__header-item-btn btn btn-sm btn-primary'>Edit</Button>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className='profile__header-item'>
                  <div className='profile__header-item-icon'>
                    <ReadOutlined />
                  </div>
                  <div className='profile__header-item-number'>3</div>
                  <div className='profile__header-item-text'>Courses</div>
                </div>
              </Col>
              <Col md={4}>
                <div className='profile__header-item'>
                  <div className='profile__header-item-icon'>
                    <ReadOutlined />
                  </div>
                  <div className='profile__header-item-number'>3</div>
                  <div className='profile__header-item-text'>Courses</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className='profile__tabs'>
          <Tabs
            tabBarStyle={tabBarStyleCss}
            className='profile__tabs-bar'
            defaultActiveKey='1'
            items={profileItems}
            onChange={onChange}
            centered
          />
        </div>

        <div className='profile__courses-taken'>
          <div className='profile__courses-taken-list'>
            <Row>
              <Col></Col>
            </Row>
          </div>
        </div>
        <div className='profile__networks'>
          <div className='profile__followers'></div>
          <div className='profile__followings'></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
