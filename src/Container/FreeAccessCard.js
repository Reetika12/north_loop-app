import React, { Component } from 'react';
import CardLayout from '../Components/CardLayout';
import Button from '@material-ui/core/Button';
import '../Styles/InvestmentCard.css'
import InvestmentCard from './InvestmentCard'


class AddRequisite extends Component {
    constructor(props) {
        super(props);
    }
  
    changeProgressBar = () => {
        const numb = document.querySelector(".numb")
        let counter=0;
        console.log("numb",numb)
        setInterval(()=>{
            if(counter===100)
            {
                clearInterval();
            }
            else{
                counter+=1;
                // numb.textContent = counter + "%";
            }
        },200)
    }

    render() {
        return (
            <React.Fragment>
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
