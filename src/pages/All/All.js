import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import Title from '../../components/Layout/Title'
import Pagination from '../../components/features/Pagination'
import SidebarRight from '../../components/SidebarRight';


const AllPage = () => {
	const [news, setNews] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	//pagination
	const [currentPage, setCurrentPage] = useState(1);
  	const [postsPerPage] = useState(5);

	useEffect(() => {
		(async (searchValue) => {
			const res = await axios.get(
				// `https://newsapi.org/v2/top-headlines?q=${searchValue}&country=id&sortBy=publishedAt&apiKey=ba0034918a84489e875d313212d04e19`
				// `https://newsapi.org/v2/top-headlines?q=${searchValue}&country=id&sortBy=publishedAt&apiKey=84de37a1a2054cc18bafae4caa2694fe`
				`https://newsapi.org/v2/top-headlines?q=${searchValue}&country=us&sortBy=publishedAt&apiKey=138b25dd620d4a9d82f908a5fb7a9edf`
			);

			setNews(res.data.articles);
		})(searchValue);
	}, [searchValue]);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);
  
	// Change page
	const paginate = pageNumber => setCurrentPage(pageNumber);


	return (
		<div>
		<SidebarRight searchValue={searchValue} setSearchValue={setSearchValue} />
		<Title title="All">
			<div className='category-title'>
				<h2>All</h2>
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
		</div
	);
};

export default AllPage;
