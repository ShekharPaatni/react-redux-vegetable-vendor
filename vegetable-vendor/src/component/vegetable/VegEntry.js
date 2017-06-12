import React,{Component} from 'react'
import './vegi.css'
import {addItem,incVegItem,decVegItem} from '../../action/vegetable'
import {connect} from 'react-redux'
import TextBox from './TextBox'
import add from '../../img/symbol_add.png'
import adds from '../../img/minus_remove_green.png'
class VegEntry extends Component{
    constructor(){
        super()
        this.state={
            userEnter:'',
            errorMsg: ''
        }
    }
    handleKey =(event) =>{
        if(event.keyCode===13 && this.state.userEnter!==''){
            let tempArr=this.state.userEnter.split('-');

            if(tempArr.length===2) {
                if (!tempArr[0].match(/^[A-z]+$/) || !tempArr[1].match(/^[0-9]+$/)) {
                    this.setState({errorMsg: "Data typed by you is wrong"})
                } else {
                    this.setState({userEnter: '', errorMsg: ''})
                    this.props.addItem(tempArr[0], tempArr[1], 1)
                }
            }else{
                this.setState({errorMsg: "Data typed by you is wrong"})
            }
        }
    }

    handleText = (event) => {

        this.setState({userEnter:event.target.value})
    }
    handleCheck = (event,index) => {
        event.preventDefault()
        this.props.incVegItem(index)

    }
    handleDecCheck = (event,index) => {
        event.preventDefault()
        this.props.decVegItem(index)
    }
    render(){
        let total=0;
        const itemList=this.props.item.map((items,index) => {
            total+=parseInt(items.amount);
            return (
                <tr key={index}>
                   <td> {items.name}</td>
                    <td>{items.amount}</td>
                    <td>{items.qty}</td>
                    <td><button className="btn" onClick={(event)=>this.handleCheck(event,index)}><img src={add} style={{width:'22px'}}/></button></td>
                    <td><button className="btn" onClick={(event) => this.handleDecCheck(event,index)}><img src={adds} style={{width:'22px'}}/></button></td>
                </tr>
            )
        })
        return(
            <div className="midDiv">
                <div className="midDiv">
                    <TextBox sty="txt" place="Item name-price entry" change={this.handleText} keyDown={this.handleKey} val={this.state.userEnter}/>
                    <span className="err">{this.state.errorMsg}</span>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Item price</th>
                            <th>Item Quantity</th>
                            <th>Inc Quantity</th>
                            <th>Dec Quality</th>
                        </tr>
                    </thead>
                    <tbody>
                    {itemList}
                    </tbody>
                 </table>
                <div>
                    TOTAL AMOUNT: {total}
                </div>

            </div>
        )
    }
}
const mapStateToProps = (store) => {
console.log("jhkdasdjkashdkajs",store);
    return{
        item: store.addData
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addItem: (name,amount,qty) => dispatch(addItem(name,amount,qty)),
        incVegItem: (index) => dispatch(incVegItem(index)),
        decVegItem: (index) => dispatch(decVegItem(index))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(VegEntry);