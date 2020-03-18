# Task

A NewsArticleList component has beem created.  The task is to call an API using fetch, then output the articles titles in a list.

The API is: https://jsonplaceholder.typicode.com/posts

## Example

[The example is here](https://jsf-react-api-request.now.sh).

# Project Setup

**Fork** this repository into your account and then **clone** that repositroy onto your machine.

Once cloned on your machine:
1. Go to the folder in your **terminal/command line** and run `npm install`.
2. **Open** the project in your **code editor**.
3. To **run the website,** go to the folder in your **terminal/command line** and run `npm start`.


## Task Steps

1. We need to use both `useEffect` and `useState` for this.  the `useEffect` callback is where we will call the API from.  We need to use `useState` to re-render the component once we have the API data.
2. Import both `useEffect` and `useState` from react with the following code:
   ```
   import React, { useState, useEffect } from 'react';
   ```

### Setup state
1. call `useState` and set the returned values into variables:
   ```
   const [state, setState] = useState();
   ```
1. set an initial state that contains an empty list of vatiables:
   ```
   const [state, setState] = useState({
     articles: []
   });
   ```

### Output JSX

1. Inside the `ul` element, we want to `map` through the articles and output a list item for each article.  The list item will just contain the article title.  The code will like this:
   ```
    <ul>
      {
        state.articles
          .map(article => <li key={article.id}>{article.title}</li>)
      }
    </ul>
   ```
2. **Note:** If this was a real app, we would create a NewArticleItem component that would output some more useful information.
3. The `key` attribute is important; you can remove it to see the warning ESLint will display about it being missing.

### Call the API using useEffect

1. call `useEffect`, after the state setup code.  Pass in an empty function as the first parameter and an empty array as the second parameter.
   ```
    // use effect will be called AFTER the first time the component renders
    useEffect(
      function() {
      },
      // pass in empty array, this array will never change so the callback will only be called once
      []
    );
   ```
2. inside the empty function we will make a standard `fetch` request to the API.  The only difference to usual, is we will pass the data from the API into `setState`:
   ```
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      // call setState with the new articles, this will cause the component to re-render
      .then(articles => setState({
        articles: articles
      }));
   ```
3. Looking at this code, we must re-render with the **same** properties as the initial render, only the **values** should change. So we make sure to use the same `articles` property as before.

The code should now work as expected.  You will see that when the page loads, we see no articles for a split second, then once they are loaded they appear in the page.