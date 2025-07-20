import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { Form, Button, Input } from 'antd';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = useCallback((e)=>{
    setEmail(e.target.value)
  }, []);

  const onChangePassword = useCallback((e)=>{
    setPassword(e.target.value)
  }, []);

  return(
    <Form>
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
      <div>
        <Button type="primary" htmlType="submit">로그인</Button>
        <Link href="/signup"><Button>회원가입</Button></Link>
      </div>
    </Form>
  )
};

export default LoginForm;