import React, { Component } from 'react'
import CardLayout from '../Components/CardLayout';
import Button from '@material-ui/core/Button';
import '../Styles/InvestmentCard.css'


class MutualFundCard extends Component {

    render() {
        return (
                <CardLayout progressbar style={{ justifyContent: 'space-between'}} >
                 <div className="mutualFundWay">
                    <div className="mutualfindKotak">
                            Investing in
                            <br/>
                            Mutual funds,
                            <br/>
                            simplified
                        </div>
                    <div className="goalBasedText">
                            - Goal based Investing
                            <br />
                            - Curated best mutual funds
                            <br/>
                            - Invest easily online
                        </div>
                        <Button
                            style={{ color: '#fff', width: '180px', backgroundColor: '#b266b9', fontWeight: '600' }}
                            onClick={this.handleSubmitButtonAction}
                        >
                            SIGN UP NOW
                        </Button>
                    </div>
                <div className="kotakImgStyle">
                        <img style={{ backgroundColor: '#32CD32',width:'100%'}} src={require('../Img/mutualfundN.png').default} alt="" />
                    </div>
                </CardLayout >
        )
    }
}

export default MutualFundCard
