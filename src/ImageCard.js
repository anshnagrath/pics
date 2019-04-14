import React,{Component,createRef} from 'react';
class ImmageCard extends Component{
    imageRef = createRef();
    state={span:''}
    componentDidMount(){
       //any time any image loads it will fire the load event 
       this.imageRef.current.addEventListener('load',this.setSpans);
    }
    setSpans=()=>{
        console.log(this.imageRef.current.clientHeight,'logging clients height');
            const imageHeight = this.imageRef.current.clientHeight;
            const span = Math.ceil(imageHeight/10);
            console.log(span,'spanssss=n.,m')
            this.setState({span});
    }
    render(){
        return(
            <div style={{gridRowEnd:`span ${this.state.span}`}}>
                <img ref={this.imageRef} alt={this.props.image.description}
                 src={this.props.image.urls.regular} />
              </div>  
        )
    }
}
export default ImmageCard