import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { Menu, Input, Row, Col } from 'antd';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const InputSearch = styled(Input.Search)`
  vertical-aling:middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return( 
    <div> 
      <Menu mode="horizontal">
        <Menu.Item><Link href="/">노드버드</Link></Menu.Item>
        <Menu.Item><Link href="/profile">프로필</Link></Menu.Item>
        <Menu.Item><InputSearch/></Menu.Item>
        <Menu.Item><Link href="/signup">회원가입</Link></Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          { isLoggedIn ?  <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
        </Col>
        <Col xs={24} md={12}>{children}</Col>
        <Col xs={24} md={6}>
          <a href="https://wwww.zerocho.com" target="_blank" rel="noreferrer noopener">Made By Zerocho</a>
        </Col>
      </Row>
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;