var React = require('react');

var Todo = React.createClass({
    render : function(){
      var {text, id} = this.props;
    return(
      <div>
        <h1>{id}. {text}</h1>
      </div>
    );
  }
});

module.exports = Todo;
