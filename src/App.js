import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [articles, setArticles] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getArticleRequest = async (searchValue) => {
    //pilih salah satu yang aktif
		const url = `https://newsapi.org/v2/top-headlines?q=${searchValue}&country=id&from=2022-10-05&sortBy=publishedAt&apiKey=ba0034918a84489e875d313212d04e19`;
		// const url = `https://newsapi.org/v2/top-headlines?q=${searchValue}&country=id&from=2022-10-05&sortBy=publishedAt&apiKey=138b25dd620d4a9d82f908a5fb7a9edf`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.articles) {
			setArticles(responseJson.articles);
		}
	};

	useEffect(() => {
		getArticleRequest(searchValue);
	}, [searchValue]);

  return (
    <div>
        <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Container style={{marginTop: 20}}>
          <h1 style={{textAlign: 'center'}}>NEWS</h1>
          <Home articles={articles} />
        </Container>
    </div>
  );
}

export default App;
