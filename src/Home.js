import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../src/Home.css'

  export class Home extends Component {
    render(){
    return (
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="media"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Grapes
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              These are grapes. Please eat them.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
           <FavoriteIcon/>
          </Button>
          <Button size="small" color="primary">
            Click for more details
          </Button>
        </CardActions>
      </Card>
    );
    }
  }