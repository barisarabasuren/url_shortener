import React from 'react'; 
import { Form, Input, message, Button, Space, List } from 'antd';
import './urlShortener.css';
import isURL from '../hooks/isUrl';
import { httpPostNewUrl } from '../hooks/requests';
import useUrls from '../hooks/useUrls';


const UrlShortener: React.FC = () => {
    const [form] = Form.useForm();

    const urls = useUrls();

    console.log(urls)

    const onFinish = async (values: {url: string} ) => {
        await httpPostNewUrl(values);
        message.success('Submit success!');
    };

    const onFinishFailed = (errorMessage: string) => {
        message.error(`${errorMessage}`);
    };

    const handleSubmit = (values: {url: string}) => {
        const url = values.url
        if(url) {
            if(url.length > 6 && isURL(url)) {
                onFinish(values)
            } else {
                onFinishFailed('Please type a valid url')
            }
        } else {
            onFinishFailed('Please type a url.')
        }
    }

    const handleCopy = (url: string) => {
        message.success('Coppied to the clipboard')
        navigator.clipboard.writeText(url)
    }

    return(
        <div className='shortener_wrapper'>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off">
                <Form.Item
                    name="url"
                    label="URL">
                    <Input placeholder="type a url" />
                </Form.Item>
                <Form.Item>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Space align='center'>
                            <Button type="primary" htmlType="submit" style={{alignSelf: 'center'}}>
                            Submit
                            </Button>
                        </Space>
                    </div>
                </Form.Item>
            </Form>
            <div className='title'>
                <p>Previous Links</p>
            </div>
            <List
                itemLayout="horizontal"
                dataSource={urls}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={
                                <div className='shortened_area'>
                                    <p>{item.shortened_url}</p>
                                    <a 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`http://localhost:8000/${item.shortened_url}`}>
                                        <img 
                                            alt='redirect'
                                            src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/20/000000/external-online-web-link-attach-with-url-information-text-bold-tal-revivo.png"/>
                                    </a>
                                    <img 
                                        alt='copy' 
                                        onClick={() => handleCopy(`http://localhost:8000/${item.shortened_url}`)}
                                        src="https://img.icons8.com/fluency-systems-regular/20/000000/copy.png"/>
                                </div>
                            }
                            description={item.url}
                        />
                            <div style={{ marginRight: '50px' }}>
                                Genarated {item.creationAttempt} times
                            </div>
                            <div style={{ marginRight: '50px' }}>
                                <img 
                                    alt='created' 
                                    src="https://img.icons8.com/ios/20/000000/planner.png"
                                    style={{marginRight: '10px'}}
                                />
                                {new Date(item.date).toLocaleDateString()}
                                
                            </div>
                            <div>
                                <img 
                                    alt='visits' 
                                    src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/20/000000/external-history-instagram-flatart-icons-outline-flatarticons.png"
                                    style={{marginRight: '10px'}}
                                />
                                {item.visits}
                            </div>
                    </List.Item>
                )}
            />
        </div>
        
    )
}

export default UrlShortener;

