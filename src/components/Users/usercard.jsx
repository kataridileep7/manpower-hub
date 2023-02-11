import * as React from 'react';
import { useTheme } from '@mui/material/styles';    
import axios from 'axios';
import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Rating } from '@mui/material';
 import "./usercard.css";
export default function MediaControlCard() {
  const theme = useTheme();
  const [users, setUsers] = useState([])
  const [rating, setRating] = useState(0);
  


  
    const getUsers = async () => {
     const usersList = await axios.get('/profiles')
     setUsers(usersList.data)
     console.log(users)
    }
   
    useEffect(() => {
     getUsers()
    },[])


useEffect(() => {
    const retrieveRating = async () => {
      const result = await axios.get(`/rating/${users}}`);
      setRating(result.data.rating);
    };

    retrieveRating();
  }, [users, ]);


  return (


    <div style={{backgroundColor:`#2BAE66`}}>
<center>
          <h1 className="heading" style={{color:`white`}}>Man Power</h1>
            <hr style={{ backgroundColor: `white`, borderColor: `black` }} />
            </center>

<h1 className style={{ marginLeft: '5%', color:`white`}}  >
  People And Connect with Companes</h1>
<hr style={{ background: `#2BAE66`, borderColor: `#2BAE66` ,}} />

    {users.map((user,i) => (
    <Card sx={{ borderLeft:'5px solid white',
      backgroundColor: 'lightgrey',display: 'flex',width:"100%",height:"300px", marginBottom:'20px', maxWidth: 1200,marginLeft:'5%',marginTop:'auto',borderRadius:'1%' }}>
        <CardMedia
        component="img"
        sx={{ width: 350 }}
        image="https://cdn.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.webp"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto',justifyContent:'center' }}>
          <Typography sx={{marginLeft: '50%',
color:`#0d98ba`,

  width: '60%',
  padding: '10px',}} component="div" variant="h2">
            {user.fname + user.lname}
          </Typography>
          <Typography 
          sx={{marginLeft: '50%',
          width: '60%',
          padding: '10px',}} variant="h4" color="text.secondary" component="div">
            {user.skills}
          </Typography>

          <Typography 
          sx={{marginLeft: '50%',
          width: '60%',
          padding: '10px',}} variant="h4" color="text.secondary" component="div">
            {user.phonenumber}
          </Typography>

          <Typography 
          sx={{marginLeft: '50%',
          width: '60%',
          padding: '10px',}}variant="h4" color="text.secondary" component="div">
           
          </Typography>
          <Typography sx={{marginLeft: '50%',
  width: '60%',
  padding: '10px',}} variant="h4" color="text.secondary" component="div">
           {user.uname}
          </Typography>
          
          <Typography sx={{marginLeft: '50%', width: '60%', padding: '10px',}} variant="h4" color="text.secondary" component="div">
    <Rating
      name="rating"
      value={user.rating}
      max={5}
      onChange={(event, newValue) => {
        console.log(newValue);
      }}
      readOnly={false}
    />
  </Typography>

          
        </CardContent>
      
      </Box>
      
    </Card>
      ))}
      </div>
  );
}