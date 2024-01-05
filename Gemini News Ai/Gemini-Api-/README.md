# Personalized Ad Display System with Live News Feed Integration

Welcome to the Personalized Ad Display System! This project aims to create an interactive platform that showcases personalized ads alongside live news feeds obtained through the Google News API.

## Project Overview

The primary goal is to:
- Display personalized ads fetched through Google's GEMINI API.
- Integrate live news feeds using the Google News API for an engaging user experience.

## Google News API Integration

The backend has been configured to fetch live news data using the Google News API. The retrieved news content can be accessed through the `/api/news` endpoint.

### Backend Setup

1. Obtain a Google News API Key from the Google Developer Console.
2. Navigate to the `backend` directory and modify the `server.js` file:
   - Replace `'YOUR_GOOGLE_NEWS_API_KEY'` with your actual API key.
   - Run `npm install` and start the backend server using `node server.js`.

### Frontend Display

The frontend components have been designed to accommodate the received news data from the backend. Update the frontend UI to display live news feeds in a visually appealing manner.

### Contribution Guidelines

Contributors are welcome to improve the following aspects:
- Enhancing the frontend display of live news feeds.
- Implementing additional functionalities for news filtering or search.
- Improving error handling and UI responsiveness.

## Code of Conduct & License

Please adhere to the [Code of Conduct](./CODE_OF_CONDUCT.md). This project is licensed under the [MIT License](./LICENSE).

Let's work together to create an engaging platform showcasing personalized ads and live news feeds!
