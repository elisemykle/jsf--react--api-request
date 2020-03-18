import React, { useState, useEffect } from 'react';

export default function NewsArticleList() {
  // set the default state to be an empty list of articles
  const [state, setState] = useState({
    articles: []
  });

  // use effect will be called AFTER the first time the component renders
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      // call setState with the new articles, this will cause the component to re-render
      // we must re-render with the same properties, only the values should change.  
      // So we make sure to use the same articles property as before
      .then(articles => setState({
        articles: articles
      }))
    },
    // pass in empty array, this array will never change so the callback will only be called once
    []
  );

  return (
    <ul>
      {
        state.articles.map(article => <li key={article.id}>{article.title}</li>)
      }
    </ul>
  );
}