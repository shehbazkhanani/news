import { Link, useLocation } from "react-router-dom"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container } from "@mui/material";

function Detail () {
   const location = useLocation()
   const data = location.state.value
   // console.log(data, 'data');

 return (
    <>
    <Container sx={{marginTop : 2}}>
   <Link to='/'> <ArrowBackIcon  /> </Link>
    <Box sx={{marginTop: 5, display : "flex", justifyContent : "center"}}>
     <Card sx={{ maxWidth: 845}}>
      <CardMedia
        component="img"
        height="440"
        image={data.urlToImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <Typography sx={{paddingTop : 3}} variant="body2" color="text.secondary">
         Source : {data.source.id}
        </Typography>
        <Typography sx={{paddingTop : 3}} variant="body2" color="text.secondary">
         Author : {data.author}
        </Typography>
      </CardContent>

    </Card>
    </Box>
    </Container>
    </> 
 )   
}

export default Detail