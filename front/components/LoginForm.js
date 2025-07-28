import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Form, Button, Input } from 'antd';
import { loginAction } from './../reducers';


const ButtonWrap = styled.div`
  margin-top: 20px;
`;

const FormWrap = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
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
    dispatch(loginAction(email, password));
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