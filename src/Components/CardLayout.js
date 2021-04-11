// @flow

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';

const styleSheet = (theme) => ({
    content: theme.mixins.gutters({
        paddingTop: '5em',
        flex: '1 1 100%',
        maxWidth: '100%',
        margin: '0 auto'
    }),
    title: {
        color: '#000000',
        height: '0.938em',
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.938em',
        fontWeight: 500,
        fontFamily: 'Gotham-Medium'
    },
  
    subTitle: {
        letterSpacing: 'normal',
        color: '#666666',
        fontFamily: 'RobotoRegular',
        paddingTop: '0.188em',
        fontSize: '0.75em'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    uploadTitleStyle: {
        fontSize: '16px',
        fontFamily: 'Gotham-Medium',
        color: '#333333',
        fontWeight: '500',
        lineHeight: 1.5
    },
    popupCard:{
        width:'500px',
        height:'200px'
    },
    popUp:{
        marginTop: '80px',
        backgroundColor: '#b266b9',
        flex: 1,
        margin: '50px 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '300px',
        borderRadius: '20px'
    },
    card: {
        marginTop: '80px',
        backgroundColor: '#b266b9',
        flex: 1,
        margin: '50px 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '200px',
        borderRadius: '20px'
    },
    progressStyle:{
        marginTop: '150px',
        backgroundColor: 'ghostwhite',
        flex: 1,
        margin: '50px 50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '300px',
        borderRadius: '20px',
        border: '1px solid #fff'
    },
    safety:{
        marginTop: '150px',
        backgroundColor: '#32CD32',
        flex: 1,
        margin: '50px 50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '300px',
        borderRadius: '20px',
        border: '1px solid #fff'
    }
});

class CardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpenStatus: false,
            dialogOpenSubject: false,
            cardTitle: ''
        };
    }

    render() {
        const {
            classes,
            children: childrenProp,
            title,
            titleCard,
            progressbar,
            safety,
            popup,
            onClick = null,
        } = this.props;
        let children = childrenProp;
        let isDivider = title || titleCard;
        return (
            <React.Fragment>
                <Card className={progressbar ? classes.progressStyle : safety ? classes.safety : popup ? classes.popUp: classes.card} onClick={onClick}>
                    {isDivider && <Divider light />}
                    {children}
               </Card>
            </React.Fragment>
        );
    }
}


export default compose(
    withStyles(styleSheet),
    withWidth(),
)(CardLayout);
