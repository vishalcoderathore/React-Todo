var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call handleAddTodo when valid input', () => {
        var testData = "Test Todo Text";
        var spy = expect.createSpy();
        var addtodo = TestUtils.renderIntoDocument(<AddTodo onClick={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));

        addtodo.refs.todo.value = testData;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(testData);
    });

    it('should not call handleAddTodo when invalid input', () => {
        var testData = "";
        var spy = expect.createSpy();
        var addtodo = TestUtils.renderIntoDocument(<AddTodo onClick={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addtodo));

        addtodo.refs.todo.value = testData;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
