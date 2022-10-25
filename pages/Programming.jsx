import React, { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import NewsList from './components/NewsList';
import axios from "axios";

const Programming = (props) => {
  const ProgrammingURL = `https://newsapi.org/v2/everything?q=programming&apiKey=${process.env.REACT_APP_API_KEY}`;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const {
          data: { articles },
        } = await axios.get(ProgrammingURL);
        setData(articles);
        setLoading(false);
      } catch (e) {
        setData([]);
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
        {/* <NavBar searchValue={searchValue} setSearchValue={setSearchValue} /> */}
        <Container style={{marginTop: 20}}>
          <h1 style={{textAlign: 'center'}}>PROGRAMMING NEWS</h1>
          <NewsList Programming={Programming} />
        </Container>
    </div>
  );
};

export default Programming;