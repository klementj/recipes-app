const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const delay = () => new Promise(res => setTimeout(res, 2000))

app.get('/recipes', async (req, res) => {
  await delay()
  res.json([
    {
      id: '1',
      name: 'Pasta Carbonara',
      time: '30min',
      featuredImage: '💆',
      ingredients: [
        {
          amount: '4',
          type: 'egg yolks'
        },
        {
          amount: '350g',
          type: 'spaghetti'
        },
        {
          amount: '50g',
          type: 'pecorino romano'
        },
        {
          amount: '180g',
          type: 'guanciale (pork)'
        },
        {
          amount: null,
          type: 'black pepper to taste'
        },
        {
          amount: null,
          type: 'salt for boiling water'
        },
        {
          amount: null,
          type: 'parmesan (optional)'
        }
      ],
      steps: [
        {
          step: '1',
          image: '',
          title: 'Boil the pasta water',
          description: "Fill a large pot with clean cold water, put it on the stove, heat and let it come to a gentle boil."
        },
        {
          step: '2',
          image: '',
          title: 'Chop pork',
          description: "While the water is on, take the <strong>guanciale</strong> and chop it into small chunks, about .5cm * 1cm. </br> Don't worry about the size, it is just to give a scale, this is a homemade dish and perfection is not necessary."
        },
        {
          step: '3',
          image: '',
          title: 'Mix the sauce',
          description: "Take a large bowl and whish the <strong>egg yolks</strong> together so they amalgamate into each other. </br> Add the <strong>pecorino</strong>, a pinch of <strong>salt</strong> and a pinch of <strong>black pepper</strong>. </br> Mix everything well together."
        },
        {
          step: '4',
          image: '',
          title: 'Boil the pasta',
          description: "Set the timer to about 7 minutes so you can taste them at that point and see how they are getting on. </br>Overall cooking time depends on the brand and consistency you like the most. "
        },
        {
          step: '5',
          image: '',
          title: 'Cook the pork',
          description: "Heat up a pan on the stove. Do not add oil or butter </br>Cook the <strong>guanciale</strong> in its own fat. </br>Stir often and let it cook for about <strong>7minutes</strong> </br> Let it cool for a few minutes. Then add it to the eff mixture and stir well."
        },
        {
          step: '6',
          image: '',
          title: 'Coat the pasta with the egg mix',
          description: "Heat up a pan on the stove. Do not add oil or butter. </br>Cook the guanciale in its own fat. </br>Stir often and let it cook for about 7minutes </br>Let it cool for a few minutes. Then add it to the eff mixture and stir well."
        },
      ]
    },
    {
      id: '2',
      name: 'Vegetable',
      icon: '🥗',
      cost: 190
    },
    {
      id: '3',
      name: 'Cereal',
      icon: '🥣',
      cost: 300,
    },
    {
      id: '4',
      name: 'Milk',
      icon: '🥛',
      cost: 600,
    },
    {
      id: '5',
      name: 'Eggs',
      icon: '🍳',
      cost: 340
    },
    {
      id: '6',
      name: 'Fruit',
      icon: '🍇',
      cost: 200
    }
  ])
})

app.listen(8080, () => console.log('Listening on 8080'))
