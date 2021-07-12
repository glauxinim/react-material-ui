import './App.css';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

 function Switches() {
  const [checkedB, setCheckedB] = React.useState(true);
  

  const handleChange = (event) => {
    setCheckedB(event.target.checked)
  };

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  if (checkedB == false){
    return  (
        <Paper elevation={3} style={{ margin: "60px" }}>
        <header>
          <h1 style={{ textAlign:"center" }}>Our Pricing</h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
            <p>Annually</p>
          <Switch
        checked={checkedB}
        onChange={handleChange}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
          /> 
          <p>Monthly</p>
          </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent:"center", paddingTop:"50px",
    paddingBottom:"50px" }}>
    
          <Card className={classes.root} style={{ textAlign:"center"}}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom style={{paddingTop:"10px"}}>
              <strong>Basic</strong>
            </Typography>
            <Typography variant="h5" component="h2" style={{ paddingBottom:"20px"}}>
              <strong>$ 199.99</strong>
            </Typography>
            <Typography className={classes.pos} color="textSecondary" style={{ paddingBottom:"10px"}}>
              500 GB Storage
              <hr style={{ opacity:"0.5" }}/>2 Users Allowed 
              <hr style={{ opacity:"0.5" }}/> Send up to 3 GB 
              <hr style={{ opacity:"0.5" }}/>
    
            </Typography>
    
          </CardContent>
          <CardActions style={{ paddingBottom:"10px"}}>
            <Button style={{ paddingInline:"100px"}}  variant="outlined" color="primary" >Learn More</Button>
          </CardActions>
        </Card>
    
        <Card className={classes.root} style={{ textAlign:"center", backgroundColor:"blueviolet", margin:"5px"}}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom style={{ color:"white", paddingTop:"10px"}}>
             <strong> Professional</strong>
            </Typography>
            <Typography variant="h4" component="h2" style={{ color:"white", paddingBottom:"20px"}}>
             <strong> $ 249.99 </strong>
            </Typography>
            <Typography className={classes.pos} color="textSecondary" style={{ color:"white", paddingBottom:"10px"}}>
              1 TB Stored
              <hr style={{ opacity:"0.5" }}/>5 Users Allowed 
              <hr style={{ opacity:"0.5" }}/> Send up to 10 GB 
              <hr style={{ opacity:"0.5" }}/>
    
            </Typography>
    
          </CardContent>
          <CardActions style={{ paddingBottom:"10px"}}>
            <Button style={{ paddingInline:"100px", color:"blueviolet", backgroundColor:"white",}}  variant="outlined">Learn More</Button>
          </CardActions>
        </Card>
    
        <Card className={classes.root} style={{ textAlign:"center"}}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom style={{paddingTop:"10px"}}>
              <strong>Master</strong>
            </Typography>
            <Typography variant="h5" component="h2" style={{ paddingBottom:"20px"}}>
              <strong>$ 399.99</strong>
            </Typography>
            <Typography className={classes.pos} color="textSecondary" style={{ paddingBottom:"10px"}}>
              2 TB Storage 
              <hr style={{ opacity:"0.5" }}/>10 Users Allowed 
              <hr style={{ opacity:"0.5" }}/> Send up to 20 GB 
              <hr style={{ opacity:"0.5" }}/>
    
            </Typography>
    
          </CardContent>
          <CardActions style={{ paddingBottom:"10px"}}>
            <Button style={{ paddingInline:"100px"}}  variant="outlined" color="primary" >Learn More</Button>
          </CardActions>
        </Card>
        </div>
        </header>
        </Paper>
      )
  }
  else {
    return  (
        <Paper elevation={3} style={{ margin: "60px" }}>
        <header>
          <h1 style={{ textAlign:"center" }}>Our Pricing</h1>
          <div style={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
            <p>Annually</p>
          <Switch
          checked={checkedB}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          inputProps={{ 'aria-label': 'primary checkbox' }}
          /> 
          <p>Monthly</p>
          </div>
    <div style={{ display: "flex", alignItems: "center", justifyContent:"center", paddingTop:"50px",
    paddingBottom:"50px" }}>
    
          <Card className={classes.root} style={{ textAlign:"center"}}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom style={{paddingTop:"10px"}}>
              <strong>Basic</strong>
            </Typography>
            <Typography variant="h5" component="h2" style={{ paddingBottom:"20px"}}>
              <strong>$ 19.99</strong>
            </Typography>
            <Typography className={classes.pos} color="textSecondary" style={{ paddingBottom:"10px"}}>
              500 GB Storage
              <hr style={{ opacity:"0.5" }}/>2 Users Allowed 
              <hr style={{ opacity:"0.5" }}/> Send up to 3 GB 
              <hr style={{ opacity:"0.5" }}/>
    
            </Typography>
    
          </CardContent>
          <CardActions style={{ paddingBottom:"10px"}}>
            <Button style={{ paddingInline:"100px"}}  variant="outlined" color="primary" >Learn More</Button>
          </CardActions>
        </Card>
    
        <Card className={classes.root} style={{ textAlign:"center", backgroundColor:"blueviolet", margin:"5px"}}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom style={{ color:"white", paddingTop:"10px"}}>
             <strong> Professional</strong>
            </Typography>
            <Typography variant="h4" component="h2" style={{ color:"white", paddingBottom:"20px"}}>
             <strong> $ 24.99 </strong>
            </Typography>
            <Typography className={classes.pos} color="textSecondary" style={{ color:"white", paddingBottom:"10px"}}>
              1 TB Stored
              <hr style={{ opacity:"0.5" }}/>5 Users Allowed 
              <hr style={{ opacity:"0.5" }}/> Send up to 10 GB 
              <hr style={{ opacity:"0.5" }}/>
    
            </Typography>
    
          </CardContent>
          <CardActions style={{ paddingBottom:"10px"}}>
            <Button style={{ paddingInline:"100px", color:"blueviolet", backgroundColor:"white",}}  variant="outlined">Learn More</Button>
          </CardActions>
        </Card>
    
        <Card className={classes.root} style={{ textAlign:"center"}}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom style={{paddingTop:"10px"}}>
              <strong>Master</strong>
            </Typography>
            <Typography variant="h5" component="h2" style={{ paddingBottom:"20px"}}>
              <strong>$ 39.99</strong>
            </Typography>
            <Typography className={classes.pos} color="textSecondary" style={{ paddingBottom:"10px"}}>
              2 TB Storage 
              <hr style={{ opacity:"0.5" }}/>10 Users Allowed 
              <hr style={{ opacity:"0.5" }}/> Send up to 20 GB 
              <hr style={{ opacity:"0.5" }}/>
    
            </Typography>
    
          </CardContent>
          <CardActions style={{ paddingBottom:"10px"}}>
            <Button style={{ paddingInline:"100px"}}  variant="outlined" color="primary" >Learn More</Button>
          </CardActions>
        </Card>
        </div>
        </header>
        </Paper>
      )
  }
}
export default Switches;