import React, { Component } from 'react';
class Images extends Component{
    render(){
        console.log(this.props.imgs,'xasx')
        return(
         this.props.imgs.map((imgs,index)=> <img style={{marginLeft:'23px',marginTop:'20px'}} key={index} alt={imgs.alt_description}src ={imgs.urls.regular} />)

        )
    }
}
export default Images