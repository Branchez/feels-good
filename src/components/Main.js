import React from 'react'
import './App.css';
import TaskItem from './tasks/TaskItem'
import taskItemData from '../data/tasks'

class Main extends React.Component  {
    render () {
        const date = new Date();
        let hours = date.getHours();
        let tod = hours < 12 ? 'morning' : hours < 17 ? 'afternoon' : 'evening';    
        const taskItemStyle = {float:'left',overflowY: 'scroll',overflowX: 'hidden', width:'30%', height: '70%' };
        const taskItemComponents = taskItemData.map(item => <TaskItem key= {item.id} taskItem = {item} />);
        return (
            <main>
                <div style = {taskItemStyle}>
                {taskItemComponents} 
                </div>
                <h1 className = 'App-link'>
                    Good {tod}
                </h1>
            </main>
        );
    }
}

export default Main