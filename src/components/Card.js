import React from 'react';
import "./Card.css";

class Card extends React.Component{

    render(){
        return(
            <React.Fragment>
                {this.props.laureates.map((laureate, index) => (
                <div className="card" key={index}>
                    <div className="card__header">
                        <img src={require(`../images/${this.props.category}.png`)} />           
                    </div>
                    <div className="card__body">
                        <p>{`${laureate.firstname} ${laureate.surname}`}</p>
                        <p>
                            <strong>{`${laureate.motivation}`}</strong>
                        </p>
                    </div>
                 </div>
                ))}
            </React.Fragment>
        )
    }
}

export default Card;