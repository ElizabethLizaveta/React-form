import React, { Component } from 'react';

export default class CardFront extends Component {
    render() {
        return (
            <div className='card-side side-front'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-xs-6'>
                            <img src="https://conceptdraw.com/a1706c3/p2/preview/640/pict--negotiations-business-people---vector-stencils-library.png--diagram-flowchart-example.png" />
                        </div>
                        <div className='col-xs-6 side-front-content'>
                            <h1>Membership for Individuals</h1>
                            <p>
                                Members of the Early English Text Society receive each year the editions published by the Society in the Ordinary Series for that year. 
                            </p>
                            <p>
                                The subscription to the Society is £30.00 or US$60.00. Individual members can pay subscriptions in three ways: by PayPal, from links on this webpage, by credit or debit card, or by a cheque in pounds sterling made out to 'The Early English Text Society', and sent to the Membership Secretary. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}