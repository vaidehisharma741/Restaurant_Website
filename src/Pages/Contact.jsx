import React from 'react'
import Layout from '../Components/Layout/Layout'
import {Box,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import { Typography } from '@mui/material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{mx:6,}}>
        <Typography variant="h4">Contact Us</Typography>
        <p>We’d love to hear from you! Whether you have questions, feedback, or just want to share your cooking experiences, feel free to reach out to us. </p>
        <TableContainer component={Paper}
        sx={{
          width: '40%',
          my:6,  
        }}>
      <Table aria-label="contact table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Contact Number
            </TableCell>
            <TableCell align="right">(123) 456-7890</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Address
            </TableCell>
            <TableCell align="right">123 Near Udaipur</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Email
            </TableCell>
            <TableCell align="right">contact@food.com</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Website
            </TableCell>
            <TableCell align="right">www.food.com</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
