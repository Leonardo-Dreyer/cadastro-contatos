import { Avatar, Button, Divider, Grid, IconButton, Input, InputBase, TextField, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import React, { useState } from "react";
import { useEffect } from "react";
import { getAll, post } from "../../../../store/modules/contacts/actions";
import { useDispatch, useSelector } from "react-redux";
import { IMaskInput } from "react-imask";
import { Link } from "react-router-dom";

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#0) 00000-0000"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  });
  

export default function Content({data}) {
    const dispatch = useDispatch()
    const todosRedux = useSelector(state => state.todos)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    function handleChange(event) {
        setPhone(event.target.value)};

    function handleAdd(name, phone) {
        if (name && phone) {
            const newContact = {
                "id": 1,
                "name": name,
                "phone": phone
            }
            setName('')
            setPhone('')
            dispatch(post(newContact))
        }
    }

    return (
        <Grid container xs={4} marginTop={10} padding={5} borderRadius={3} justifyContent='center' sx={{backgroundColor: '#fff'}}>
            <Typography variant="h5" mb={10}>Cadastrar Contato</Typography>
            <Grid item xs={8}>
                <Grid item xs={12} mb={5}> 
                    <Input
                        variant="filled"
                        label="Name"
                        sx={{ ml: 1, flex: 1}}
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        inputProps={{ 'aria-label': 'name' }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} mb={10}> 
                    <Input
                        variant="filled"
                        sx={{ ml: 1, flex: 1 }}
                        value={phone}
                        onChange={(e) => handleChange(e)}
                        name="phone"
                        placeholder="Número"
                        inputComponent={TextMaskCustom}
                        inputProps={{ 'aria-label': 'phone' }}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} mb={8} display='flex' justifyContent='end'>
                    <Button variant="contained" aria-label="add" onClick={() => handleAdd(name, phone)}>
                        <Typography marginRight={1} variant='subtitle1'>Salvar</Typography>
                        <CheckIcon />
                    </Button>
                </Grid>
                <Grid item xs={12} display='flex' justifyContent='center'>
                    <Link to='/list-contacts'>Lista de contatos</Link>
                </Grid>
            </Grid>
        </Grid>
    )
} 
