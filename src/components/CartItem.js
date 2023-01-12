import React from 'react';
import {useDispatch} from "react-redux"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { decrease, increase, removeItem } from '../features/cart/cartSlice';

const CartItem = ({id,name,price,pic,amount}) => {

    const theme = useTheme();
    const dispatch = useDispatch()
    const handelRemove = ()=>{
        dispatch(removeItem(id))
    }

    return (
    

 
    <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           <h2>{name}</h2>
           <h4> <strong>{price} TND</strong></h4>
          </Typography>
        
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <SkipPreviousIcon onClick={()=>dispatch(decrease({id}))} />
          </IconButton>
          <IconButton aria-label="play/pause">
           {amount}
          </IconButton>
          <IconButton aria-label="next">
         
            <SkipNextIcon onClick={()=>dispatch(increase(id))}/>
        
          </IconButton>
        </Box>
        <button onClick={handelRemove} > remove</button>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={pic}
        alt="Live from space album cover"
      />
    </Card>
  )
}

export default CartItem