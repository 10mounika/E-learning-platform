import React, { Fragment, useEffect } from 'react';
import { Avatar, Button, Skeleton, Space, Table, Tag, Tooltip } from 'antd';
import type { ColumnsType, TableProps, TablePaginationConfig } from 'antd/es/table';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';
import { useState } from 'react';
import './UsersList.scss';
import { Link, useNavigate } from 'react-router-dom';
// import { useGetCourseQuery, useGetCoursesQuery } from '../../course.service';
import { EditOutlined, EllipsisOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import UserDetail from './components/UserDetail';
import { useGetUsersQuery } from '../../user.service';
interface DataUserType {
  key: React.Key;
  name: HTMLElement;
  avatar?: string;
  email?: string;
  courses: HTMLElement;
  tags: HTMLElement;
  createdAt: string; // Convert to date: Example: 18 jun 2023
  lastLogin: string;
  actions?: any;
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

const columns: ColumnsType<DataUserType> = [
  {
    title: 'User',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Category 1',
        value: 'Category 1'
      },
      {
        text: 'Category 2',
        value: 'Category 2'
      }
    ],
    filterMode: 'tree',
    filterSearch: true,
    // onFilter: (value: string | number | boolean, record) => record.name.startsWith(value.toString()),
    width: '30%'
  },
  {
    title: 'Last login',
    dataIndex: 'lastLogin'
    // sorter: (a, b) => Number(a.author) - Number(b.author)
  },
  {
    title: 'Registerd',
    dataIndex: 'createdAt',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ],
    // onFilter: (value: string | number | boolean, record) => record.categories.startsWith(value.toString()),
    filterSearch: true
  },
  {
    title: 'Courses',
    dataIndex: 'courses'
  },
  {
    title: 'Tags',
    dataIndex: 'tags'
  },
  {
    title: 'Manage',
    dataIndex: 'manage'
  }
];

const onChange: TableProps<DataUserType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const UsersList: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { data, isFetching } = useGetUsersQuery();

  const showUserDetail = () => {
    console.log('click');
    setOpen(true);
  };

  const usersData = data?.users.map((user) => {
    const userTemplateItem = {
      key: user._id,
      name: (
        <a href='#' onClick={showUserDetail}>
          <div className='user-info'>
            <img alt={user.name} src={user.avatar} className='user-info__avatar' />

            <div className='user-info__content'>
              <div className='user-info__name'>{user.name}</div>
              <div className='user-info__email'>{user.email}</div>
            </div>
          </div>
        </a>
      ),
      lastLogin: '19 Jul 2023 21:43:35',
      createdAt: '17 Jul 2023 21:38:07',
      courses: (
        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
          {(user.courses || []).map((course) => (
            <Avatar src={course.thumbnail} />
          ))}
          {/* <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=2' />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar> */}
          <Tooltip title='Ant User' placement='top'>
            {(user.courses || []).map((course) => (
              <Avatar src={course.thumbnail} />
            ))}
          </Tooltip>
          {/* <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} /> */}
        </Avatar.Group>
      ),
      tags: (
        <>
          <Tag color='magenta'>magenta</Tag>
          <Tag color='red'>red</Tag>
        </>
      ),
      manage: (
        <Space>
          <Button>
            <EditOutlined />
          </Button>
          <Button>
            <EllipsisOutlined />
          </Button>
        </Space>
      )
    };

    return userTemplateItem;
  });

  const usersSource = [
    {
      key: '1',
      name: (
        <a href='#' onClick={showUserDetail}>
          <div className='user-info'>
            <img
              src='https://lwfiles.mycourse.app/64b5524f42f5698b2785b91e-public/avatars/thumbs/64b5524f42f5698b2785b91f.jpg'
              className='user-info__avatar'
            />

            <div className='user-info__content'>
              <div className='user-info__name'>sangtrandev</div>
              <div className='user-info__email'>sangtnps20227@fpt.edu.vn</div>
            </div>
          </div>
        </a>
      ),
      lastLogin: '19 Jul 2023 21:43:35',
      createdAt: '17 Jul 2023 21:38:07',
      courses: (
        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
          <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=2' />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Tooltip title='Ant User' placement='top'>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Tooltip>
          <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
        </Avatar.Group>
      ),
      tags: (
        <>
          <Tag color='magenta'>magenta</Tag>
          <Tag color='red'>red</Tag>
        </>
      ),
      manage: (
        <Space>
          <Button>
            <EditOutlined />
          </Button>
          <Button>
            <EllipsisOutlined />
          </Button>
        </Space>
      )
    },
    {
      key: '2',
      name: (
        <a href='#'>
          <div className='user-info'>
            <img
              src='https://lwfiles.mycourse.app/64b5524f42f5698b2785b91e-public/avatars/thumbs/64b5524f42f5698b2785b91f.jpg'
              className='user-info__avatar'
            />

            <div className='user-info__content'>
              <div className='user-info__name'>trannhatsang</div>
              <div className='user-info__email'>nhatsang@gmail.com</div>
            </div>
          </div>
        </a>
      ),
      lastLogin: '19 Jul 2023 21:43:35',
      createdAt: '17 Jul 2023 21:38:07',
      courses: (
        <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
          <Avatar src='https://xsgames.co/randomusers/avatar.php?g=pixel&key=2' />
          <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          <Tooltip title='Ant User' placement='top'>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </Tooltip>
          <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
        </Avatar.Group>
      ),
      tags: (
        <>
          <Tag color='magenta'>magenta</Tag>
          <Tag color='red'>red</Tag>
        </>
      ),
      manage: (
        <Space>
          <Button>
            <EditOutlined />
          </Button>
          <Button>
            <EllipsisOutlined />
          </Button>
        </Space>
      )
    }
  ];

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 12
    }
  });

  return (
    <Fragment>
      {isFetching && <Skeleton />}
      {!isFetching && (
        <div className='users-list'>
          {/* {isFetching && <Skeleton />} */}
          <Table columns={columns} dataSource={usersData} onChange={onChange} pagination={tableParams.pagination} />
          <UserDetail isOpen={open} onClose={() => setOpen(false)} />
        </div>
      )}
    </Fragment>
  );
};

export default UsersList;
