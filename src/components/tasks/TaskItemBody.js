import React from 'react'

class TaskItemBody extends React.Component {
    render () {
        return (<div>
            <span>{this.props.item.bodyData.location}</span>
            <div>
                <span>{this.props.item.bodyData.date}</span>
            </div>
        </div>);
    }
}

export default TaskItemBody