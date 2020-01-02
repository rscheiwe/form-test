import React,{Component} from 'react';
import SimpleForm from './components/SimpleForm';
import './App.css';

export default class App extends Component {

  state = {
    isFormVisible:false
  }

  handleClick = (e) => {
    e.preventDefault()
    const {isFormVisible} = this.state
    console.log('clicked')
    this.setState({
      isFormVisible:!isFormVisible
    })
  }
  handleSubmit = (values) => {
    console.log(values)
  }
  
  render() {
    const { isFormVisible } = this.state
    return (
      <div className="App">
        <button
          onClick={this.handleClick}
        >
          +
        </button>
        {isFormVisible ? 
        <SimpleForm onSubmit={this.handleSubmit}></SimpleForm>
        :
        null}
      </div>
    );
    }
}


