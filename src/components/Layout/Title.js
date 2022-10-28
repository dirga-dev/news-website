import { Helmet } from 'react-helmet-async';


const Title = ({ children, title }) => {
	return (
		<>
			<Helmet>
				<title>{title ? `News Website | ${title}` : 'News Website'}</title>
			</Helmet>
		
			<main >{children}</main>
		</>
	);
};

export default Title;
