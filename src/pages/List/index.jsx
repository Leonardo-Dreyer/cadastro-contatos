import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getAll} from '../../store/modules/contacts/actions'
import { Box } from '@mui/material';
import Header from '../../sharedComponents/Header';
import Content from './components/Content';

export default function ListContacts() {
    const dispatch = useDispatch()
    
    const contactsRedux = useSelector(state => state.contacts)

    useEffect(() => {
        dispatch(getAll())
    }, [])

    return (
        <Box display='flex' flexDirection='column' alignItems='center' height='1000px' sx={{backgroundColor: '#00098a'}}>
            <Header/>
            <Content data={contactsRedux} />
        </Box>
    )
}