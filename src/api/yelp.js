import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 2qtO25j3hKxG7fdm32hTM86BbPPEvAPKh8jhhxXBdEaF34SZJ49ZZk62HySDG-42jM76azvuLQvstVJVps82hFdsuJ90lOypEEiV1yhQrkbZxUy_mo0W4JqlsM0pYnYx',
  },
})
