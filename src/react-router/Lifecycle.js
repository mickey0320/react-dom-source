import React from "react"

class Lifecycle extends React.Component{
    componentDidMount(){
        this.props.onMount?.()
    }
    render(){
        return null
    }
}

export default Lifecycle