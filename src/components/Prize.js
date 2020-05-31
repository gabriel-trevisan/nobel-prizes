import React from 'react';
import Card from './Card';
import ErrorBoundary from './ErrorBoundary';
import "./Prize.css";

class Prize extends React.Component{

    render(){
        return(
            <div className="container">
            {this.props.prizes.map((prize, index) => (
                <div key={index}>
                    <h2>{prize.year}</h2>
                    <hr/>
                    <h3>{prize.category}</h3>
                    <div className="card__wrap">
                        <ErrorBoundary key={index}>
                            <Card 
                                laureates={prize.laureates}
                                category={prize.category}
                            />
                        </ErrorBoundary>
                    </div>
                </div>
            ))}
            </div>
        )
    }

}

export default Prize;