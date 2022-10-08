import * as React from 'react';
import { Table, TableHead, TableRow, TableCell } from '@mui/material';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Calendar() {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell />
                    {days.map((day) => (
                        <TableCell>{day}</TableCell>
                    ))}
                </TableRow>
                <TableRow>
                    <TableCell>Chef</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Recipe</TableCell>
                </TableRow>
            </TableHead>
        </Table>
    );
}