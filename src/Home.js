import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom';
import '../src/Home.css'

  export class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
          data : 
          [{
            name : 'Gluten Free',
            description: '',
            img: require('../src/wheat.png')
          },
          {
            name : 'Dairy Free',
            description: '',
            img: require('../src/grapes.jpg')
          },
          {
            name : 'Lactose Free',
            description: '',
            img: require('../src/lactose.png')
          },
          {
            name : 'Low Calorie',
            description: '',
            img: require('../src/grapes.jpg')
          },
          {
            name : 'Sugar Free',
            description: '',
            img: require('../src/grapes.jpg')
          },
          ,
          {
            name : 'Vegan',
            description: '',
            img: require('../src/grapes.jpg')
          },
          ,
          {
            name : 'Vegetarian',
            description: '',
            img: require('../src/grapes.jpg')
          },
          ,
          {
            name : 'Low Fat',
            description: '',
            img: require('../src/grapes.jpg')
          },
          ,
          {
            name : 'Italian',
            description: '',
            img: require('../src/grapes.jpg')
          },
        ]
      }
    }

    handleClick = name =>{

    }

    render(){
    return (
      this.state.data.map((key, value) => 
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="media"
            style={{backgroundImage: `url(${key.img})`}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {key.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             {key.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
           <FavoriteIcon/>
          </Button>
          <Link to="/recipes">
          <Button size="small" color="primary"  onClick={this.handleClick(key.name)}>
            Click for more details
          </Button>
          </Link>
        </CardActions>
      </Card>
    ));
    }
  }