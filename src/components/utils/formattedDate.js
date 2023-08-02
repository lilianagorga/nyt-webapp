const formattedDate = () => {
	const dateOptions = {
		weekday: 'long', 
		year: 'numeric', 
		month: 'long', 
		day: 'numeric'
	};

	return new Date().toLocaleDateString('en-US', dateOptions);
}

export default formattedDate;