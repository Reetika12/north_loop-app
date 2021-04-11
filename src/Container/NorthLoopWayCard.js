import React, { Component } from 'react'
import CardLayout from '../Components/CardLayout';
import Button from '@material-ui/core/Button';
import '../Styles/InvestmentCard.css'


class NorthLoopWayCard extends Component {

  render() {
        return (
            <div >
                <CardLayout progressbar >
                    <div className="northloopWay">
                        <div className="northLoopWayTitle">
                            The North Loop Way
                        </div>
                        <div className="personalisedText">
                            Personalized stratgies for
                            <br/>
                             your life's goals
                        </div>
                        <div className="personalizedsmallerText">
                            From retirement planning to purchasing a
                                <br />
                            home, we create Personalized stratgies that
                             <br/>
                             help you achieve your goals with simple and
                             <br/>
                             easy-to-follow investment plans
                            </div>
                        <Button
                            style={{ color: '#fff', width: '180px', backgroundColor: '#b266b9', fontWeight: '600' }}
                            onClick={this.handleSubmitButtonAction}
                        >
                            CHECK OUT PLANS
                        </Button>
                    </div>
                    <div style={{width:'30%'}}>
                       <img style={{ backgroundColor: '#32CD32' }} src={require('../Img/mobileImg.png').default} alt="" />
                    </div>
                </CardLayout >
            </div>
        )
    }
}

export default NorthLoopWayCard
