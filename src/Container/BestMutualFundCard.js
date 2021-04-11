import React, { Component } from 'react'
import CardLayout from '../Components/CardLayout';
import Button from '@material-ui/core/Button';
import '../Styles/InvestmentCard.css'

class BestMutualFundCard extends Component {
    render() {
        return (
            <div >
                <CardLayout >
                    <div className="investInMutual">
                        <div className="mutualfindTitle">
                            Invest in the best
                            <br/>
                             Mutual Funds
                            </div>
                        <div className="mutualFundText">
                             Invest in the best mutual funds with
                                <br />
                            North Loop, in a simple and secure
                                <br/>
                            manner
                        </div>
                    </div>
                </CardLayout >
            </div>
        )
    }
}

export default BestMutualFundCard
