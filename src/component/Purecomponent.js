import React from 'react'
class Increment extends React.Component{
    constructor(){
        super()
        this.state={
            count:1
        }
    }
    search=()=>{
    if(this.state.count<=0){
        alert('its negeative number')
        
    }
    else{
        this.setState({count:this.state.count-1})
    }

    }
    search1=()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        return(
            <div className='App'>
                <h1 className='circle'>
                <h1 className='count'>{this.state.count}</h1></h1>
                <button className='btn' onClick={this.search}>Decrement</button>
                <button className='btn1' onClick={this.search1}>Increment </button>
                

            </div>
        )
    }
}  
export default Increment;