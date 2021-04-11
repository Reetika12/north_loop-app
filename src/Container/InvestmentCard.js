import React, { Component } from 'react'
import CardLayout from '../Components/CardLayout';
import Button from '@material-ui/core/Button';
import { PieChart, Pie, Cell } from 'recharts';
import '../Styles/InvestmentCard.css'


class InvestmentCard extends Component {
   
    data02 = [
        { name: 'Equity', value: 13, color: "#FA8072" },
        { name: 'Cash', value: 2, color: "#6495ED" }
    ]

    renderLegends = (data, index, color) => {
        return (
            <div className="block" key={index}>
                <div className="box">
                    <div className="circle" style={{ backgroundColor: `${color}` }}>
                    </div>
                    <div className="dataBox">
                        <div className="countText">
                            {data.name}
                        </div>
                        <div>
                            {(data.value * 100 / 15).toFixed()}%
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        let { classes } = this.props
        return (
            <div >
                <CardLayout progressbar >
                    <div className="commonParentStyle">
                        <PieChart width={200} height={200}>
                            <Pie
                                data={this.data02}
                                cx={90}
                                cy={100}
                                innerRadius={45}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {
                                    this.data02.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
                                }
                            </Pie>
                        </PieChart>
                        <div className="legendsBox">
                            {
                                this.data02.map((pieData, index) => {
                                    return this.renderLegends(pieData, index, pieData.color, classes)
                                })
                            }
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
