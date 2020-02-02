import React, { Component } from 'react';
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

export class Recipes extends Component {
  constructor(props) {
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
          process:'Heat grill to medium. Toss zucchini with 1 tablespoon oil and 1/2 teaspoon salt and grill until tender and evenly charred, 8 to 10 minutes. Transfer zucchini to blender along with garlic, tahini, lemon juice, and 1 tablespoon mint and pulse to combine. With motor running on low speed, drizzle in remaining 2 tablespoons olive oil and puree until mostly smooth, increasing blender speed if necessary. Chop remaining mint. Serve zucchini mixture topped with mint and pine nuts.'
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
          process:'Melt the chocolate in a double-boiler: place a small saucepan of hot water over low heat, set the chocolate in a heatproof bowl over it, and allow it to melt gently, stirring with a spoon. Place your feuille guitare on a flat and cold surface and take the bowl of chocolate off the heat. Drop small spoonfuls of chocolate on the sheet, using the back of the spoon to form little circles, about 4cm (1 1/2 inches) across.Place 2 to 3 topping elements (nut, fruit, and/or other) on the circle. Try to create nice contrasting effects with the color and texture and taste of the toppings. Work a few mendiants at a time, forming six circles of chocolate then decorating them before spooning in new circles.When a batch is complete, place the sheet in a cool place for the chocolate to set, then pluck the mendiants carefully from the sheet.'
        },
        {
          name : 'Cucumber Melon Soup',
          description: 'This one-pot gazpacho combines cool cucumbers with sweet honeydew for a totally vegan, totally delicious soup.',
          img: require('../src/grapes.jpg'),
          date: 'February 17 2018',
          process:'Put all ingredients in a blender.  Blend until smooth.Adjust to taste, adding more lime or jalapeño.Refrigerate and serve chilled.'
        },
        {
          name : 'Mushroom Quinoa Burger',
          description: 'We promise these are nothing like those sad, frozen veggie patties.',
          img: require('../src/grapes.jpg'),
          date: 'February 23 2016',
          process:''
        },
        {
          name : 'Tofu Pad Thai',
          description: 'It may be hard to believe but this sweet and spicy pad thai is better than takeout (yep, we went there).',
          img: require('../src/grapes.jpg'),
          date: 'September 1 2019',
          process:''
        },
        {
          name : 'Tomato Soup',
          description: 'You will probably want to make a double batch of these coconutty toasted pitas for an afternoon snack.',
          img: require('../src/grapes.jpg'),
          date: 'October 15 2000',
          process:''
        },
      ]
    };
  }

  handleRender(){
   return  this.state.data.map((key, value) => 
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
  </Card>)
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
     <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginTop: "5%"}}>
         {this.handleRender()}
     </div>
    );
  }
}