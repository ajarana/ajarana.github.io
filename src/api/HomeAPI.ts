export const getRepoByName = async (repoName: string) => {
	const response = await fetch(
		"https://api.github.com/repos/ajarana/" + repoName,
		{
			headers: {
				// This access token is NOT necessary to make this GET request. It's only included to increase the GitHub API rate limit during development.
				...(process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN && {
					Authorization:
						"Bearer " + process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN,
				}),
			},
		}
	);

	if (!response.ok) {
		throw new Error();
	}

	return response.json();
};
