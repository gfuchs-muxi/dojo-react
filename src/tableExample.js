import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { TableCell, TableHead } from '@material-ui/core';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

export default function CustomPaginationActionsTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <div>
        <Table>
        <TableHead>
            <TableRow>
              {
                  props.data.titles.map(title => (
                    <TableCell align="center">{title}</TableCell>
                )) 
              }
            </TableRow>
        </TableHead>
        <TableBody>
            {props.data.rows.map(row => (
              <TableRow>
                {
                    props.data.titles.map(cell => (
                        <TableCell align="center">{row[cell]}</TableCell>
                    ))     
                }           
              </TableRow>
            ))} 
          </TableBody>
          <TableFooter>
            <TableRow>
           
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </Paper>
  );
}