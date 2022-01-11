import React from 'react'
//import axios from "axios";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

class App extends React.Component {
    // Constructor
    constructor(props) {
      super(props);
  
      this.state = {
        items: [],
        DataisLoaded: false,
      };
    }

componentDidMount()
{
    fetch("http://128.199.27.165:8081/menu/list")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json.data,
          DataisLoaded: true,
        });
      });
} 

render()
{
    const { DataisLoaded, items } = this.state;
   // let index = 0;
   console.log(DataisLoaded+"Data mil gaya")
   if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );

      return (
        <div className="App">
          <h1> Fetching data from api in react </h1>{" "}
          <TableContainer component={Paper}>
            <div className="test">
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="right">S.NO</StyledTableCell>
                    <StyledTableCell align="right">menu_image</StyledTableCell>
                    <StyledTableCell align="right">menu_id</StyledTableCell>
                    <StyledTableCell align="right">menu_name</StyledTableCell>
                    <StyledTableCell align="right">menu_price</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items.map((item, index) => (
                    <StyledTableRow key={item.menu_id}>
                        <StyledTableCell align="center">
                       { index + 1}
                       </StyledTableCell>
                      <StyledTableCell align="center">
                       {item.menu_image}
                         </StyledTableCell>
                         <StyledTableCell align="center">
                        {item.menu_id}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.menu_name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.menu_price}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TableContainer>
        </div>
      );
}
}
console.log("Anchla calling....")
export default App;