import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <div id='user-card'>
                <h1>Count== {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({ count: ++this.state.count })
                }}>Increase cnt</button>
                <h2>User Name : {this.props.name}</h2>
                <h2>locaction : Andhra</h2>
                <h2>contact : vsrinivas919@gmail.com</h2>
            </div>
        )
    }
}

export default UserClass;

