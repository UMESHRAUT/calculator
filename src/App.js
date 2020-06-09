import React,{Component} from 'react';
import './App.css';
import KeyPad from "./components/KeyPad";
import OutPut from "./components/output";



class App extends Component {
  state={
    result:""
  };

  buttonPressed= buttonName =>{
    if(buttonName==="="){
      this.calculate();
    }else
    if(buttonName==="C"){
      this.setState({
        result:""
      })
    }
    else if(buttonName==="CE"){
      this.setState({
        result:this.state.result.slice(0,-1)
      })
    }else if(this.state.result==="Math error")
    this.setState({
      result:""+buttonName
    });
    else
    this.setState({
      result:this.state.result+buttonName
    });
  }


  calculate=()=>{
    try{
      this.setState({
      result:eval(this.state.result)
    })
  }catch(e){
    this.setState({
      result:"Math error"
    })
  }
  }
  render(){
  return (
    <div className="App calc-body">

      <OutPut result={this.state.result}/>
      <KeyPad buttonPressed={this.buttonPressed}/>
    </div>
  );
}
}
export default App;
