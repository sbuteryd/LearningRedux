import React,{Component} from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input,Button,List } from 'antd';

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

class TodoList extends Component{
    render() {
        return (
            <div style={{marginTop:'20px',marginLeft:'30px'}}>
                <div>
                    <Input placeholder="Todo info" style={{width:'300px',marginRight:'10px'}}/>
                    <Button type='primary'>提交</Button>
                </div>
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    size="large"
                    bordered
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>

        );
    }
}


export default TodoList