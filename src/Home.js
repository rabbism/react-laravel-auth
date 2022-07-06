import React from 'react'
import { Grid,Paper, Avatar,Box,Link,IconButton,AppBar,Toolbar,TextField, Button, Typography,Link as Nv } from '@material-ui/core'
import ListIcon from '@material-ui/icons/List';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

const Home=(props)=>{

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}
    
    let history = useHistory(); 

    const usersss = localStorage.getItem('users'); // User Name from DB is showing here with help of LocalStorge

    const logout =  () => {
      axios.get('http://localhost:8000/api/logout/')
      .then((response) => {
        localStorage.removeItem("users")
        history.push("/");
      })
      .catch((err) => {
      })
  }

    return(
        <div className="">
          <AppBar position="static">
            <Toolbar>
            <ListIcon />
              <IconButton edge="start" color="inherit" aria-label="menu">
              </IconButton>
              <Typography style={{marginRight:"10px"}}>
                Product
              </Typography>
              <Typography>
                Services
              </Typography>
              <Grid container justify="space-between">  
                <Typography></Typography>
                <Typography inline variant="body1" align="right" >Welcome To Home : <span><b> {usersss} </b></span><Link type='submit' onClick={logout}  color='white'  variant="contained"  >Logout</Link></Typography>
              </Grid>
            </Toolbar>
          </AppBar>
           
           <Grid>
        
          </Grid>            
            <h4 style={{textAlign:"left",marginLeft:"10px"}}>Welcome To Home : <span style={{color:"green"}}><b>{usersss}</b></span></h4>
           
             
            <Grid container direction="row" justify="center" alignItems="center">
             <Grid item xs={4}>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
      
        </div>
    )
}

export default Home