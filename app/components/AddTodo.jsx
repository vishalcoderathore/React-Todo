var React = require('react');

var AddTodo = React.createClass({
  onSubmit : function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;
    if(todo.length > 0){
      this.refs.todo.value = '';
      this.props.onClick(todo);
    }else{
      this.refs.todo.focus();
    }
  },
  render : function(){
    return(
      <div>
        <form onSubmit = {this.onSubmit} ref = "form">
          <input type="text" placeholder = "Enter task here" ref = "todo"/>
          <button className = "button expanded">Add Todo</button>
        </form>
    </div>
    );
  }
});

module.exports = AddTodo;
