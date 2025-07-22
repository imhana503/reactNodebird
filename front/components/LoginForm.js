import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Form, Button, Input } from 'antd';

const ButtonWrap = styled.div`
  margin-top: 20px;
`;

const FormWrap = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((e)=>{
    setEmail(e.target.value)
  }, []);

  const onChangePassword = useCallback((e)=>{
    setPassword(e.target.value)
  }, []);

  const onSubmitForm = useCallback(()=>{
    console.log(email, password);
    setIsLoggedIn(true);
  }, [email, password]);

  return(
    <FormWrap onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email" id="user-email">이메일</label>
        <br/>
        <Input type="email" name="user-email" required value={email} onChange={onChangeEmail}/>
      </div>
      <div>
        <label htmlFor="user-email" id="user-password">비밀번호</label>
        <br/>
        <Input type="password" name="user-password" required value={password} onChange={onChangePassword}/>
      </div>
      <ButtonWrap>
        <Button type="primary" htmlType="submit">로그인</Button>
        <Link href="/signup"><Button>회원가입</Button></Link>
      </ButtonWrap>
    </FormWrap>
  )
};

export default LoginForm;