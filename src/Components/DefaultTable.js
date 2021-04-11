import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import _get from 'lodash/get';

import './Styles/DefaultTableStyles.css';

export default function DefaultTable(props) {
    let headerName = props.json || [];
    let tableData = _get(props, 'data') || [];
    let { title } = props;
    return (
        <TableContainer style={{ width: '40%', boxShadow: '20px 20px 2px #fff2f2', borderRadius: '16px' }} component={Paper}>
            <div className="tableTitleStyle">{title}</div>
            <Table className="table" aria-label="a dense table">
                <TableHead>
                    <TableRow className="tableHeaderRowStyle">
                        {headerName.map((item, index) => (
                            <TableCell
                                component="th"
                                scope="row"
                                key={`${item.label}-header${index}`}
                            >
                                <div className="tableHeaderTextStyle">{item.label}</div>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row, i) => (
                        <TableRow
                            key={`${row.id}keytable${i}`}
                            className="tableBodyRowStyle"
                        >
                            {headerName.map((item, index) => {
                                if (item.key) {
                                    return (
                                        <TableCell
                                            key={`${item.key}${row.id}${index}`}
                                        >
                                            <div className="tableBodyTextStyle">
                                                {_get(row, `${item.key}`) || '--'}
                                            </div>
                                        </TableCell>
                                    );
                                }
                                if (item.renderRow) {
                                    return (
                                        <TableCell
                                            key={`${i}${row.id}${index}`}
                                        >
                                            <div className="tableBodyTextStyle">
                                                {item.renderRow(row)}
                                            </div>
                                        </TableCell>
                                    );
                                }
                                return null;
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
