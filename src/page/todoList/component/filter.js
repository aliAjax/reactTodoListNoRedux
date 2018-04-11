import React, { Component } from "react";
import styles from "../static/style.css"
export default class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showType1: 1,
            showType2: 0,
            showType3: 0,
        }
    }
    handelClick(showType,data) {
        // console.log(showType,data)
        this.props.filter(data)
        switch (showType) {
            case "showType1":
                this.setState({
                    showType1: 1,
                    showType2: 0,
                    showType3: 0,
                })
                break;
            case "showType2":
                this.setState({
                    showType1: 0,
                    showType2: 1,
                    showType3: 0,
                })
                break;
            case "showType3":
                this.setState({
                    showType1: 0,
                    showType2: 0,
                    showType3: 1,
                })
                break;
            default:
            break;
        }
    }

    render() {
        let showType1 = this.state.showType1
        let showType2 = this.state.showType2
        let showType3 = this.state.showType3
        return (
            <div className={styles.choose}>
                <span>showType:</span>
                <ul className={styles.todoList}>
                    <li className={styles[showType1 ? "type" : ""]} onClick={this.handelClick.bind(this, "showType1","All")}>All</li>
                    <li className={styles[showType2 ? "type" : ""]} onClick={this.handelClick.bind(this, "showType2","WillDo")}>WillDo</li>
                    <li className={styles[showType3 ? "type" : ""]} onClick={this.handelClick.bind(this, "showType3","Did")}>Did</li>
                </ul>
            </div>
        )
    }
}