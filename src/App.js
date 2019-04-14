import React, { Component } from 'react';
import Searchbar from './Searchbar'
import Images from './Images'
import Unsplash from'./Unsplash'
class App extends Component {

  state={
   images:[] 
  };
   onSearchSubmit=async(term)=>{
let data = await Unsplash.get('/search/photos',{
  params:{query:term},
  headers:{
    Authorization:"Client-ID ca83915ba196aa851cbd9d9e54b777093176d2c9c49ae40640d5ffb39388aa38"
  },
})
console.log(data,'logging data')
this.setState({images:data.data.results})
}

  render() {
    return (
      <div className="ui container">
         <Searchbar onSubmit={this.onSearchSubmit}/>

         <Images imgs={this.state.images} />

      </div>
    );
  }
}

export default App;
