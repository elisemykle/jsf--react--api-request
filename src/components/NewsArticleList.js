import React, { useState, useEffect } from 'react';

export default function NewsArticleList() {
    const [state, setState] = useState({
        articles: []
    });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            // call setState with the new articles, this will cause the component to re-render
            .then(articles => setState({
                articles: articles
            }));
    }, []);//!NB remember empty array to only load once
  return (
    <ul>
      {state.articles
        .map(article => <li key={article.id}>{article.title}</li>)
      }
    </ul>
  );
}
