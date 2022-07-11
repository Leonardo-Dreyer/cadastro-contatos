import GlobalStyles from '@mui/material/GlobalStyles';

export default function Globals() {
    return (
        <GlobalStyles styles={{
            body: { 
                margin: '0',
                padding: '0',
            },
            a: {
                textDecoration: 'none'
            }
        }} />
    );
}