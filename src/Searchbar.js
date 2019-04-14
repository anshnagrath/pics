import React, { Component } from 'react';
import './Searchbar.css'
class Searchbar extends Component{
state={
    text:''
}    
submit = (e)=>{
e.preventDefault();
   console.log(e) 
  this.props.onSubmit(this.state.text) 
}



render(){
    return(
<form onSubmit={this.submit}>
<div className="massive ui category search " >
  <div className="ui icon input strech"  >
    <input className="prompt"  value={this.state.text} onChange={e=>this.setState({text:e.target.value})} type="text" placeholder="Search Anything"/>
    
    <i className="search icon"></i>
  </div>
  <div className="results"></div>
</div>
</form>
    )
}
}
export default Searchbar