import React from 'react'
import TaskItemHeader from './TaskItemHeader'
import TaskItemBody from './TaskItemBody'
import TaskItemFooter from './TaskItemFooter'


class TaskItem extends React.Component {    
    render () {
        return (<div className = 'new-task-list-item new-task-list-item--open new-task-list-item--active'>
            <TaskItemHeader item = {this.props.taskItem}/>
            <TaskItemBody item = {this.props.taskItem}/>
            <TaskItemFooter item = {this.props.taskItem}/>
        </div>);
    }
}

export default TaskItem