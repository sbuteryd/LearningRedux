import React,{Component} from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input,Button,List } from 'antd';
import store from './store'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
    }
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
                    dataSource={this.state.list}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>

        );
    }
}


export default TodoList