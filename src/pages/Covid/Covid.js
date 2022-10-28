import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import Title from '../../components/Layout/Title'
import Pagination from '../../features/Pagination'


const CovidPage = () => {
	const [news, setNews] = useState([]);

	//pagination
	const [currentPage, setCurrentPage] = useState(1);
  	const [postsPerPage] = useState(5);

	useEffect(() => {
		(async () => {
			const res = await axios.get(
				`https://newsapi.org/v2/everything?q=covid&pageSize=40&apiKey=84de37a1a2054cc18bafae4caa2694fe`
			);

			setNews(res.data.articles);
		})();
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);
  
	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<Title title="Covid-19">
			<div className='category-title'>
				<h2>Covid-19</h2>
			</div>
			<section>
				
				{currentPosts?.map(n => (
					<Layout news={n} key={n.title} />
				))}
				<div>

				<Pagination
        			postsPerPage={postsPerPage}
        			totalPosts={news.length}
        			paginate={paginate}
      			/>
				</div>
			</section>
		</Title>
	);
};

export default CovidPage;
