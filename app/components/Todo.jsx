var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var {text, id, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed
            ? 'todo todo__completed'
            : 'todo';
        var renderDate = () => {
            var message = 'Created @ ';
            var timestamp = createdAt;
            if (completed) {
                message = 'Completed @ ';
                timestamp = completedAt;
            }
            return message + moment.unix(timestamp).format('MM Do YYYY @ h:mm a');
        };
        return (
            <div className={todoClassName} onClick= {() => { this.props.onToggle(id); }}>
                <div>
                    <input type="checkbox" checked={completed}></input>
                </div>
                <div>
                    <p>{text}</p>
                    <p className='todo-subtext'>{renderDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = Todo;
