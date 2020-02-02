import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import '../src/Home.css'
import history from "./history";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:
        [{
          name: 'Gluten Free',
          filter: 'gluten_free',
          description: '',
          search: 'gluten+free',
          img: ''
        },
        {
          name: 'Dairy Free',
          description: '',
          filter: 'dairy_free',
          search: 'dairy+free',
          img: '',
        },
        {
          name: 'Lactose Free',
          filter: 'lactose_free',
          description: '',
          search: 'lactose+free',
          img: ''
        },
        {
          name: 'Low Calorie',
          filter: 'low_calorie',
          description: '',
          search: 'low+calorie+food',
          img: ''
        },
        {
          name: 'Sugar Free',
          filter: 'sugar_free',
          description: '',
          search: 'sugar+free',
          img: ''
        },
        {
          name: 'Vegan',
          filter: 'vegan',
          description: '',
          search: 'vegan+food',
          img: ''
        },
        {
          name: 'Vegetarian',
          filter: 'vegetarian',
          description: '',
          search: 'pumpkin+soup',
          img: ''
        },
        {
          name: 'Low Fat',
          filter: 'low_fat',
          description: '',
          search: 'low+fat',
          img: ''
        },
        {
          name: 'Italian',
          filter: 'italian',
          description: '',
          search: 'italian+food',
          img: ''
        },
        ]
    };
  }

  componentDidMount() {
    const { data } = this.state;
    const axios = require('axios');
    let newObj = JSON.parse(JSON.stringify(data));

    const requests = newObj.map(async val => {
      const url = 'https://pixabay.com/api/?key=15109849-5dddb086f24a8ef9023579a12&q=' + val.search + '&image_type=photo&pretty=true';
      return axios.get(url).then(response => {
        val.img = response.data.hits[0].previewURL;
        return val;
      });
    });

    Promise.all(requests).then((completed) => {
      this.setState({ data: completed });
    });
  }

  handleClick = name => {
    history.push('/recipes/' + name);
  }

  render() {
    const { data } = this.state; 

    return (
      data.map((key, value) =>
        <Card className="card">
          <CardActionArea>
            <CardMedia
              className="media"
              style={{ backgroundImage: `url(${key.img})` }}
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
              <FavoriteIcon />
            </Button>
            <Link to={"/recipes/" + key.filter}>
              <Button size="small" color="primary" onClick={() => this.handleClick(key.filter)}>
                Click for more details
            </Button>
            </Link>
          </CardActions>
        </Card>
      ));
  }
}