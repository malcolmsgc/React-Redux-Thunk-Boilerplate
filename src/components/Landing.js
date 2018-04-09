import React, { Component, Fragment } from 'react';

class Landing extends Component {

    componentDidMount() {
        this.props.appIsInteractive(true);
    }

    render() {
        return (
            <Fragment>
                <h1 className="App-title">React App Boilerplate</h1>
                <p className="App-intro">Now hooked up to Redux, RR4, and Thunk</p>
                {this.props.appInteractive ?
                    (<Fragment>
                        <p>Ready to rumble!</p>
                        <p>
                            <span role="img" aria-label="thumbs up">👍</span>
                        </p>
                    </Fragment>) : <p>Loading!</p>
                }
                <button onClick={()=>this.props.history.push('/enquiry')}>Another page</button>
            </Fragment>
        );
    }

}

export default Landing;
