import React, { useCallback } from 'react';
import { Form, Button, Input } from 'antd';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useInput from './../hooks/useInput';

const CommentForm = ({post}) => {
    const id = useSelector((state)=>state.user.me?.id);
    const [commentText, onChangeCommentText] = useInput();
    const onSubmitComment = useCallback(()=>{

    }, [commentText]);
    return(
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position:'relative', margin:0 }}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}></Input.TextArea>
                <Button style={{ position:'absolute', right:0, bottom:-40, zIndex:3  }} htmlTypes="submit" type="primary">삐약</Button>
            </Form.Item>
        </Form>
    )
};

CommentForm.propTypes= {
    post: PropTypes.object.isRequired,
}

export default CommentForm;