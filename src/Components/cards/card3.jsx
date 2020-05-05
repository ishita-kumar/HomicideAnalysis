import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Kasy from "../../Images/kasturi.jpeg";

const useStyles = makeStyles({
  root: {
    // maxWidth: 245,
  },
  media: {
    height: "200px",
    paddingLeft:"10px",
    paddingRight:'50px'
  },
  
});

export default function Kasturi() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Kasy}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ishita Kumar
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Full Stack Web Developer | 
           Sushi lover
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <GitHubIcon/>
        </Button>
        <Button size="small" color="primary">
        <LinkedInIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}
