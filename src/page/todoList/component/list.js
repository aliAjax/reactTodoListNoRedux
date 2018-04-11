import React, { Component, Fragment } from "react";
import styles from "../static/style.css"
export default class List extends Component {
    // constructor(props){
    //     super(props)
    // }

    handleClickid(id){
        this.props.completed(id)
    }

    render() {
        let newArr=this.props.addThing.filter((item)=>{
            if(this.props.showType==="All"){
                return item
            }else if(this.props.showType==="WillDo"){
                return item.type===false
            }else{
                return item.type===true
            }
        })
        return (
                <Fragment>
                    <ul>
                        {
                            newArr.map((item,index)=>{
                                return <li key={index} className={styles[item.type?"active":""]} 
                                onClick={this.handleClickid.bind(this,item.id)}
                                >{item.name}</li>
                            })
                        }
                    </ul>
                </Fragment>
        )
    }
}