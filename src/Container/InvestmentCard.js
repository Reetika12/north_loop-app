import React, { Component } from 'react'
import CardLayout from '../Components/CardLayout';
import Button from '@material-ui/core/Button';
import '../Styles/InvestmentCard.css'

class InvestmentCard extends Component {
    render() {
        return (
            <div >
                <CardLayout progressbar >
                    <div className="trackcard">
                        <div className="circular">
                            <div className="inner"></div>
                            <div className="numb" id="num" >100%</div>
                            <div className="circle">
                                <div className="bar left">
                                    <div className="progress">
                                    </div>
                                </div>
                                <div className="bar right">
                                    <div className="progress">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="trackInvestment">
                        <div className="trackTitle">
                            Track Your Investments
                            </div>
                        <div style={{ padding: '20px 0px', }}>
                            Track all your mutual fund Investments,
                                <br />
                            their performance and more in one simple app
                            </div>
                        <Button
                            style={{ color: '#fff', width: '150px', backgroundColor: '#b266b9', fontWeight: '600' }}
                            onClick={this.handleSubmitButtonAction}
                        >
                            SIGN UP NOW
                        </Button>
                    </div>
                </CardLayout >
            </div>
        )
    }
}

export default InvestmentCard
