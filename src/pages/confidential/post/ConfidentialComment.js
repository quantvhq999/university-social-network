import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentRequest, fetchCommentsRequest } from '../../../redux/actions/confidentialAction';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} bình luận`}
        itemLayout="horizontal"
        renderItem={props => <Comment content={<p>{props.content}</p>} author={<b>Người lạ</b>} avatar='https://joeschmoe.io/api/v1/random' />}
    />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Bình luận
            </Button>
        </Form.Item>
    </>
);

export default function ConfidentialComment() {
    const dispatch = useDispatch()
    const router = useRouter()
    const [commentsArr, setComments] = useState([])
    const [submitting, setSubmitting] = useState(false)
    const [value, setvalue] = useState('')
    const { slug } = router.query
    const { comments } = useSelector(state => state.commentsReducer)
    /// fetch comment
    useEffect(async () => {
        await dispatch(fetchCommentsRequest(slug))
      }, [comments])
    useEffect(() => {
        if(comments && comments.comments && comments.comments.length > 0){
            setComments(comments.comments)
        }
    }, [comments])
    
    const handleSubmit = () => {
        if (!value) {
            return;
        }
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
            setvalue('')
            dispatch(commentRequest({
                id:slug,
                content: value
            }))
            setComments([
                ...commentsArr,
                {
                    author:<b>Người lạ</b>,
                    avatar: 'https://joeschmoe.io/api/v1/random',
                    content: <p>{value}</p>,
                }
            ])
        }, 1000);
    };

    const handleChange = e => {
        setvalue(e.target.value)
    };

    return (
        <>
            {commentsArr.length > 0 && <CommentList comments={commentsArr} />}
            <Comment
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                content={
                    <Editor
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        submitting={submitting}
                        value={value}
                    />
                }
            />
        </>
    );


}
