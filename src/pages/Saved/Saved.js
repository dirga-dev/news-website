import Layout from '../../components/Layout/Layout';
import Title from '../../components/Layout/Title'
import { useSelector } from 'react-redux';

const SavedPage = () => {
	const savedNews = useSelector(state => state.saved.articles);

	return (
		<Title title="Saved">
			<h2>Saved News</h2>

			{savedNews.length ? (
				<div className="container">
					{savedNews?.map(n => (
						<Layout key={n.title} news={n} />
					))}
				</div>
			) : (
				<h3>Oops! You haven't saved any news.</h3>
			)}
		</Title>
	);
};

export default SavedPage;
