import React,{Component} from 'react'

export default class TextBox extends Component{
    render(){
        return(
            <input className={this.props.sty} placeholder={this.props.place} onChange={this.props.change} onKeyDown={this.props.keyDown} value={this.props.val}/>
        )
    }
}