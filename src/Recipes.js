import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import '../src/Home.css';
import {Router, Link} from 'react-router-dom'

  export class Recipes extends Component {
    constructor(props){
      super(props);
      this.state = {
          expanded: false,
          data : 
          [{
            name : 'Vegan Paella',
            description: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
            img: require('../src/wheat.png'),
            date: 'September 14 2020',
            process:'Preheat oven to 375 degrees.In a large stock pot, combine 4 cups of vegetable stock and 2 cups of white wine.Bring to a boil, and add rice. Cover and simmer for 15 minutes.In a paella pan (or deep oven-safe frying pan), heat a drizzle of olive oil over medium heat.Add bell peppers and onions, and cook for 5 minutes.Add shiitake mushrooms, and cook for 3 more minutes.Add artichoke hearts, piquillo peppers, garlic, capers, saffron, paprika, and cayenne pepper. Stir and cook for 2 more minutes.Add rice into paella pan. Season with salt and pepper to taste, and stir to combine.'
          },
          {
            name : 'Vegan Tacos',
            description: 'Refried black beans, soy chorizo, corn tortillas, vegetable',
            img: require('../src/grapes.jpg'),
            date: 'January 11 2000',
            process:'In a large skillet, heat oil over medium-high heat; saute cabbage, pepper and onion until crisp-tender, about 5 minutes. Sprinkle with sugar.Stir in beans, salsa, chiles, garlic, chili powder and cumin; bring to a boil. Reduce heat; simmer, covered, until flavors are blended, about 5 minutes.Serve in taco shells. Top with cheese and avocado.'
          },
          {
            name : 'Zucchanoush',
            description: 'Try swapping in zucchini for eggplant in classic baba ganoush for this creamy, dreamy, vegan zucchini-and-tahini dip.',
            img: require('../src/lactose.png'),
            date: 'July 4 2002',
            process:''
          },
          {
            name : 'Creamy Roasted Squash Puree',
            description: 'This vegan roasted butternut squash gets a little extra sweetness from a drizzle of maple syrup. Roast it and eat it plain, or blitz it into a smooth and creamy puree.',
            img: require('../src/grapes.jpg'),
            date: 'April 14 2009',
            process:'Carefully cut the squash in half, vertically.Bring a pot of salted water to a boil. Drain the butternut squash in a colander and transfer to the bowl of a food processor.Add the seasonings and pulse again to combine.'
          },
          {
            name : 'Chocolate Mediants',
            description: 'These customizable chocolate coins are basically just melted chocolate topped with anything your heart desires. Use dairy-free chocolate and they are a 100% vegan treat.',
            img: require('../src/grapes.jpg'),
            date: 'April 15 1999',
            process:''
          },
          ,
          {
            name : 'Cucumber Melon Soup',
            description: 'This one-pot gazpacho combines cool cucumbers with sweet honeydew for a totally vegan, totally delicious soup.',
            img: require('../src/grapes.jpg'),
            date: 'February 17 2018',
            process:''
          },
          ,
          {
            name : 'Mushroom Quinoa Burger',
            description: 'We promise these are nothing like those sad, frozen veggie patties.',
            img: require('../src/grapes.jpg'),
            date: 'February 23 2016',
            process:''
          },
          ,
          {
            name : 'Tofu Pad Thai',
            description: 'It may be hard to believe but this sweet and spicy pad thai is better than takeout (yep, we went there).',
            img: require('../src/grapes.jpg'),
            date: 'September 1 2019',
            process:''
          },
          ,
          {
            name : 'Tomato Soup',
            description: 'You will probably want to make a double batch of these coconutty toasted pitas for an afternoon snack.',
            img: require('../src/grapes.jpg'),
            date: 'October 15 2000',
            process:''
          },
        ]
      }
    }

     handleExpandClick = () => {
        this.setState({expanded: !this.state.expanded});
      };

    render(){
    return (
      this.state.data.map((key, value) => 
      <Router>
      <Card className="recipecard">
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor: "rgb(109, 125, 201)"}}>
            {key.name.substr(0,1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={key.name}
        subheader={key.date}
      />
      <CardMedia
        className="media"
        image={key.img}
        title={key.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {key.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {key.process}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Router>
    ));
    }
  }