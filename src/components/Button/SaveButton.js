const SaveButton = ({ onClick, className, children, ...props }) => {
	return (
		<button onClick={onClick} className={` ${className}`} {...props}>
			{children}
		</button>
	);
};

export default SaveButton;
