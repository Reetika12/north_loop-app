import React, { Component } from 'react';
import CardLayout from '../Components/CardLayout';
import Button from '@material-ui/core/Button';
import '../Styles/InvestmentCard.css'
import InvestmentCard from './InvestmentCard'
import BestMutualFundCard from './BestMutualFundCard'
import SafetyGurantyCard from './SafetyGurantyCard'
class AddRequisite extends Component {
    constructor(props) {
        super(props);
    }
  

    render() {
        return (
            <React.Fragment>
                <SafetyGurantyCard />
                <BestMutualFundCard/>
                <InvestmentCard/>
                <CardLayout >
                    <div className="cardStyle">
                        <div className="combineLabelStyle">
                        Get Free Access to North Loop
                        </div>
                        <div className="submitButton" >
                            <Button
                            style={{ color: '#a054a7', fontWeight: '600'}}
                            onClick={this.handleSubmitButtonAction}
                        >
                         SIGN UP NOW
                        </Button>
                        </div>
                    </div>
                </CardLayout>
            </React.Fragment>
        );
    }
}


export default AddRequisite
