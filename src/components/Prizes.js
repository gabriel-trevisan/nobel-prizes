import React from "react";
import Prize from "./Prize"

class Prizes extends React.Component {
    render(){
        return(
            <Prize prizes={this.props.prizes}/>
        )
    }

}

export default Prizes;