# Random Joke Generator

A fun and interactive random joke generator application using an external API.

## Features

- 🎭 Get random jokes instantly
- 🎨 Beautiful and modern UI
- 🔄 Multiple joke categories
- 📋 Joke history tracking
- ❤️ Favorite jokes collection
- 🎯 Share jokes on social media
- 🌙 Dark theme with vibrant colors
- ⚡ Fast and responsive

## Supported Joke Categories

- Programming Jokes
- Knock-Knock Jokes
- General Jokes
- Random Jokes

## Technologies Used

- React 18
- Axios for API calls
- JokeAPI (https://jokeapi.dev)
- CSS3 with animations
- React Hooks (useState, useEffect, useContext)

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

The app will open at `http://localhost:3000`

## How to Use

1. **Get Random Joke** - Click the "Get Joke" button to fetch a random joke
2. **Select Category** - Choose from different joke categories
3. **Favorite Jokes** - Click the heart icon to save your favorite jokes
4. **Share** - Share jokes to social media
5. **View History** - See all jokes you've viewed

## API Reference

Using **JokeAPI** - Free and open API for jokes

- Endpoint: `https://jokeapi.dev/joke/Any`
- No API key required
- Rate limit: 30 requests per 10 seconds

## Features Details

### Random Generation
- Fetches jokes from external API
- No duplicates in single session
- Supports 2-part jokes and single-line jokes

### History Management
- Stores last 20 jokes viewed
- Clear history option
- Export history as JSON

### Favorites
- Save unlimited favorite jokes
- Local storage persistence
- Export/import favorites

## License

MIT
