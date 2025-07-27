import React, { useState, useCallback } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Form, Button, Input, Checkbox } from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from './../hooks/useInput';

const ErrorMessage = styled.div`
  color:red;
`;

const ButtonWrap = styled.div`
  margin-top:10px;
`;

const Signup = () => {
  const [email, onChnageEmail] = useInput(); 
  const [nickname, onChnagNickname] = useInput(); 
  const [password, onChnagPassword] = useInput(); 

  const [passwordCheck, setPasswordCheck] = useState(); 
  const [passwordError, setPasswordError] = useState();
  const onChnagPasswordCheck = useCallback((e)=>{
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  const [term, setTerm] = useState();
  const [termError, setTermError] = useState();
  const onChangeTerm = useCallback((e)=>{
    setTerm(e.target.checked);
    setTermError(false);
  }, [])

  const onSubmit = useCallback(()=>{
    if(password !== passwordCheck) return setPasswordError(true);
    if(!term) return setTermError(true);
    console.log(email, nickname, password);
  }, [password, passwordCheck, term]);
  
  return(
    <AppLayout>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br/>
          <Input name="user-email" value={email} onChange={onChnageEmail} required/>
        </div>
        <div>
          <label htmlFor="user-nickname">닉네임</label>
          <br/>
          <Input name="user-nickname" value={nickname} onChange={onChnagNickname} required/>
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br/>
          <Input type="password" name="user-password" value={password} onChange={onChnagPassword} required/>
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br/>
          <Input type="password" name="user-password-check" value={passwordCheck} onChange={onChnagPasswordCheck} required/>
          { passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>제로초의 말을 잘 들을 것을 동의 합니까?</Checkbox>
          { termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
        </div>
        <ButtonWrap>
          <Button type="primary" htmlType="submit">가입하기</Button>
        </ButtonWrap>
      </Form>
    </AppLayout>
  )
}

export default Signup;