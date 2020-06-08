import React from 'react'

class TaskItemHeader extends React.Component { 
    render () {
        return (<div className = "new-task-list-item__header">
            <span className = "new-task-list-item__title">{this.props.item.headerData.title}</span>
            <div>
                <span className = "new-task-list-item__price">{this.props.item.headerData.price}</span>
            </div>
        </div>);
    }
}

export default TaskItemHeader