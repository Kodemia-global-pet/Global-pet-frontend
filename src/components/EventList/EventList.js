import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const EventList = ({ records }) => {
    
    return (
        <div>
            <h2>Registros</h2>
            <TableContainer component={Paper} sx={{ backgroundColor:"grey.light" }}>
                <Table size="small">
                    <TableHead>
                        <TableRow sx={{ color:"grey.main" }}>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Evento</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ color:"#545454" }}>
                        {records.map((record) => (
                            <TableRow key={record.title} >
                                <TableCell>{new Date(record.date).toLocaleDateString("en-us",{ month: 'short', day: 'numeric', year:'numeric' })}</TableCell>
                                <TableCell>{record.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default EventList