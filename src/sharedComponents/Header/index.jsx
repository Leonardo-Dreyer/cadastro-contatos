import { Grid, Typography } from "@mui/material";

export default function Header() {
    return (
        <Grid container height={100} sx={{backgroundColor:'primary'}} color='white'> 
            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                <Typography variant="h3"><strong>Contatos</strong></Typography>     
            </Grid>
        </Grid>
    );
}