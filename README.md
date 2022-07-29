## Overview

RecipeBook is a recipe search and sharing website built with React, Express, Node, and Twilio.

The app is powered by the Edamam Recipe Search API which allows users to search over 2.3 million recipes on the web. The app also allows users to send recipes that they like to their personal numbers, if they so choose.

## Getting Started

### 1. Install the necessary dependencies
```bash
npm install
# or
yarn install
```

### 2. Configure environment variables
In `./.env` file, fill out `REACT_APP_EDAMAM_ID` and `REACT_APP_EDAMAM_KEY`. Credentials can be created in www.edamam.com.

In `./server/.env`, fill out `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN` and `TWILIO_PHONE_NUMBER`. Credentials can be created in www.twilio.com.


### 3. Run the backend and frontend development server
Be sure to have nodemon installed. Then, in `./server`, run
```bash
npx nodemon
```

In `./`, run
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.
