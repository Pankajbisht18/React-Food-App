import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import './css/card.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '345px',
    marginTop: '50px',
  },
  media: {
    height: '300px',
    width: '500px',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    marginTop: '-40px',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

const RecipeReviewCard = ({
    label,
    image,
    mealType,
    cuisineType,
    DishType,
    ingredient,
    url
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="h6"  color="textSecondary" component="h6">
          {label}
        </Typography>
        <Typography variant="p"  color="textDark" component="h6">
          Meal Type: {mealType}
        </Typography>
        <Typography variant="p"  color="textDark" component="h6">
          Cuisine Type: {cuisineType}
        </Typography>
        <Typography variant="p"  color="textDark" component="h6">
          Dish Type: {DishType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" color="textDark" component="h6">Ingredients</Typography>
            <Typography paragraph>
              {ingredient}
            </Typography>
            <a href={url} target="_blank" rel="noreferrer">
              <Button variant="contained" color="secondary">
                Read Recipe
              </Button>
            </a>
        </CardContent>
      </Collapse>
    </Card>
    
  );
}
export default RecipeReviewCard;