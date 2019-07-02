import React,{Component} from 'react'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Input } from 'antd';


class TodoList extends Component{
    render() {
        return (
            <div>
                <Input placeholder="todo info" />
            </div>
        );
    }
}


export default TodoList