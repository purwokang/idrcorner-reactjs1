// fCC React: Bind 'this' to a Class MethodPassed
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello"
        };
        // Change code below this line
        this.handleClick = this.handleClick.bind(this);
        // Change code above this line
    }
    handleClick() {
        // whatever "myMethod" does
        this.setState({
            text: "You clicked!"
        });
    }
    render() {
        return (
            <div>
                { /* Change code below this line */}
                <button onClick={this.handleClick}>Click Me</button>
                { /* Change code above this line */}
                <h1>{this.state.text}</h1>
            </div>
        );
    }
};


ReactDOM.render(<MyComponent />, document.getElementById('root'));
