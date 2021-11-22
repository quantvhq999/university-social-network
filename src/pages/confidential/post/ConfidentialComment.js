import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCommentsRequest } from '../../../redux/actions/confidentialAction';

const { TextArea } = Input;

const CommentList = ({ comments }) => (
    <List
        dataSource={comments}
        header={`${comments.length} bình luận`}
        itemLayout="horizontal"
        renderItem={props => <Comment {...props} />}
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
    const [comments, setComments] = useState([])
    const [submitting, setSubmitting] = useState(false)
    const [value, setvalue] = useState('')
    const { slug } = router.query

    const handleSubmit = () => {
        if (!value) {
            return;
        }
        setSubmitting(true)
        setTimeout(() => {
            setSubmitting(false)
            setvalue('')
            setComments([
                ...comments,
                {
                    author:<b>Quan</b>,
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
            {comments.length > 0 && <CommentList comments={comments} />}
            <Comment
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
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
