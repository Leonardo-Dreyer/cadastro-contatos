import { Avatar, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";

import { deleteOne } from "../../../../store/modules/contacts/actions";

export default function Content({data}) {
    const dispatch = useDispatch()

    function handleDelete(index) {
        dispatch(deleteOne(index))
    }

    return (
        <Grid container xs={5} paddingTop={10} >
            <Grid item xs={12}>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant='subtitle1'>
                                        <strong>Contatos salvos</strong> 
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && data.map((item, index) => {
                                if (index < 10) {
                                    return (
                                        <TableRow hover role="checkbox">
                                            <Paper elevation={2} sx={{padding: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>   
                                                <Grid item xs={1}>
                                                    <Avatar>{index + 1}</Avatar>
                                                </Grid>   
                                                <Grid item xs={6}>
                                                    <Typography>{item?.name}</Typography>
                                                </Grid>      
                                                <Grid item xs={4}>
                                                    <Typography>{item?.phone}</Typography>
                                                </Grid>                                                
                                                <Grid item xs={1}>
                                                    <IconButton onClick={() => handleDelete(index)}>
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </Grid>
                                            </Paper>
                                        </TableRow>
                                    )
                                }
                                return true
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Grid>    
        </Grid>
    )
}