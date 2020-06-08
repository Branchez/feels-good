import React from 'react'

class TaskItemFooter extends React.Component {
    render () {
    return (<div>
        <span>{this.props.item.footerData.status}</span>
    </div>);
    }
}

export default TaskItemFooter