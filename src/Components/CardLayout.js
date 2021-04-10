// @flow

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
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
    card: {
        boxShadow: '0 0 0.5em 0 rgba(236, 236, 236, 0.5)',
        maxHeight: '100%',
        overflow: 'auto',
        marginTop: '80px',
        backgroundColor: '#b266b9',
        flex: 1,
        margin: '50px 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '200px',
        borderRadius: '20px'
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
            action,
            loading,
            onClick = null,
            cohortDetails,
            cardHeaderStyle = ''
        } = this.props;
        let children = childrenProp;
        let isDivider = title || titleCard;
        return (
            <Card className={classes.card} onClick={onClick}>
                {title && (
                    <CardContent className={cardHeaderStyle}>
                        <div className={cohortDetails}>
                            <div className={classes.uploadTitleStyle}>{title}</div>
                        </div>
                        {loading && <CircularProgress />}
                        {action}
                    </CardContent>
                )}
                {titleCard && (
                    <CardContent className={cardHeaderStyle}>{titleCard}</CardContent>
                )}
                {isDivider && <Divider light />}
                {children}
            </Card>
        );
    }
}


export default compose(
    withStyles(styleSheet),
    withWidth(),
)(CardLayout);