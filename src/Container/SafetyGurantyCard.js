import React, { Component } from 'react'
import CardLayout from '../Components/CardLayout';
import '../Styles/InvestmentCard.css'

class SafetyGurantyCard extends Component {
    render() {
        return (
                <CardLayout  safety>
                    <div className="safetyCard">
                    <img style={{ backgroundColor: '#32CD32'}} src={require('../Img/securityshield.jpeg').default} alt="" />
                    </div>
                        <div className="trackInvestment">
                            <div className="safetyTitle">
                                Safety Guranteed
                            </div>
                            <div  className="mutualFundText" >
                                As an AMFI-regulated distributor,we
                                <br />
                                never touch your funds. The mutual
                                <br/>
                                fund will debit your account, and your
                                <br/>
                                money goes straight to them
                            </div>
                        </div>
                </CardLayout >
        )
    }
}

export default SafetyGurantyCard
