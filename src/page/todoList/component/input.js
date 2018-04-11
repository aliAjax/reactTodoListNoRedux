import React, { Component, Fragment } from "react";
export default class Input extends Component {
    // constructor(props){
    //     super(props)
    // }

    addEvent(data){
        this.props.parrent(data)
    }

    render() {
        return (
                <Fragment>
                    <input ref={(el) => this.todoEl = el} placeholder="add a new thing" />
                    <button onClick={() => {
                        return(
                            this.addEvent(this.todoEl.value),
                            this.todoEl.value=""
                        )
                        }}>AddThing</button>
                </Fragment>
        )
    }
}