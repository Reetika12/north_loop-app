import React, { Component } from 'react'
import CardLayout from '../Components/CardLayout';
import '../Styles/InvestmentCard.css'
import DefaultTable from '../Components/DefaultTable'


class BestMutualFundCard extends Component {
    constructor(props){
        super(props);
        this.state={
            json:[
                { key: 'name', label: 'Name' },
                { key: 'sector', label: 'Sector' },
                { key: 'instrument', label: 'Instrument' },
            ]
        }
    }

    dataList = [{name:'Avenue Supermarts Ltd',sector:'Services',instrument:'Equity'},
        { name: 'Kotak Mahindra Bank Ltd', sector: 'Financial', instrument: 'Equity' },
        { name: 'HDFC Bank Ltd', sector: 'Financial', instrument: 'Equity' }]
    render() {
        return (
            <div >
                <CardLayout popup>
                    <DefaultTable title="Top Holdings" json={this.state.json} data={[...this.dataList]} />
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
