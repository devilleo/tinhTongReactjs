import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TinhTong from './formTinhTong/TinhTong'

class App extends Component {
  state = {
    result: '',
    value1: '',
    value2: ''
  }

  updateValue1 = (event) => {
    this.setState({
      value1: event.target.value
    })
    console.log(parseInt(this.state.value1))
  }

  updateValue2 = (event) => {
    this.setState({
      value2: event.target.value
    })
  }

  Sum = () => {
    this.setState({
      result: (parseInt(this.state.value1,10) + parseInt(this.state.value2,10)).toString()
    })
    console.log(this.state.result)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
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
              </div>

              <div className="col-sm-6" id="tinhTong">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12">
                      <h1>Tính tổng</h1>
                    </div>
                    <br></br>
                    <br></br>
                    <TinhTong 
                      value = '1'
                      placeHolder = 'Nhập số thứ nhất'
                      changed={this.updateValue1}
                    />
                    <TinhTong
                      value = '2'
                      placeHolder = 'Nhập số thứ hai'
                      changed={this.updateValue2}
                    />
                    <div className="col-sm-12 row">
                      <div className="col-sm-3">
                        <label id="kq">Kết quả:</label>
                      </div>
                      <div className="col-sm-9">
                        <input disabled value={this.state.result} className="form-control"></input>
                      </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="col-sm-12">
                      <button onClick={this.Sum} type="button" className="btn btn-lg btn-success">Tính</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
