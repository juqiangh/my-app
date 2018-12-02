import React, {Component, Fragment} from 'react';
import { CSSTransition,TransitionGroup } from 'react-transition-group';
/*import logo from './logo.svg';
import './App.css';*/
import './style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            list: []
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    key={index}
                                    timeout={1000}
                                    classNames={'fade'}
                                    unmountOnExit
                                    onEntered={(el) => {
                                        el.style.color = 'blue'
                                    }}
                                    appear={true}
                                >
                                    <div>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>toggle</button>
                {/*<div className={this.state.show ? 'show' : 'hide'}>hello</div>*/}
                {/*<CSSTransition
              in={this.state.show}
              timeout={1000}
              classNames={'fade'}
              unmountOnExit
              onEntered={(el) => {
                el.style.color = 'blue'
              }}
              appear={true}
            >
              <div>hello</div>
            </CSSTransition>
           <button onClick={this.handleToggle}>toggle</button>*/}
            </Fragment>
        )
    }

    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }

    handleToggle() {
        this.setState({
            show: this.state.show ? false : true
        })
    }

    /*render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }*/
}

export default App;
