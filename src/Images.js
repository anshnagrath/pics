import React, { Component } from 'react';
import ImageCard from './ImageCard';
import './ImageList.css'
class Images extends Component{
    render(){
        console.log(this.props.imgs,'xasx');
       
         const images = this.props.imgs.map((imgs,index)=> <ImageCard  key={index} image={imgs} />
         
         )
         return <div className="image-list">{images}</div>
        
    }
}
export default Images