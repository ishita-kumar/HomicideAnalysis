import React from 'react';
import { Link } from 'react-router-dom'
// import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import BarGraph from "../Graphs/Graph1";
import LineGraph from "../Graphs/Graph2";
import PieGraph from "../Graphs/Graph3";
import Mapgraph from "../Graphs/Mapgraph";
import Analysis from "../Graphs/Analysis";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Project = props => {
  const graphType = props.graphType
  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="project">

      <a className="project-link" See The Visaulization
        href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">

          </p>
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons">
          {/* <Link to="/">    See the Graph</Link>{' '} */}
          <Button variant="outlined" color="#0E0302" onClick={handleClickOpen}>

        Open<i className="fas fa-external-link-alt" />
      </Button>
          {/* <a href={repo} target="_blank" rel="noopener noreferrer">
            See the Graph <i className="fas fa-external-link-alt" />
          </a> */}

          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="lg">
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              {
                graphType === '1' ? 'State-wise Murder Count over United States' 
                :graphType === '2'? 'Bar graph for Crime Rate by Race' 
                :graphType === '3'? 'Trend for Gun Violence Crime over the years'
                :graphType === '4'? 'Solved and Unsolved'
                : 'default'
            }
       
        </DialogTitle>
            <DialogContent dividers>
              <Typography gutterBottom>
                {
                  graphType === '1' ? <Mapgraph />
                  :graphType === '2'? <BarGraph/>
                  :graphType === '3'? <LineGraph/>
                  :graphType === '4'? <PieGraph/>
                  :<LineGraph/>

                }
                </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Exit
          </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Project;

