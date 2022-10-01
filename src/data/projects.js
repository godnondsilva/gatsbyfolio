const PROJECTS = [
	{
		id: 1,
		isFeatured: true,
		title: 'Project 1',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		skills: ['Skill', 'Skill', 'Skill', 'Skill', 'Skill'],
		image: 'placeholder', // Note: Only enter the name of the file, not the extension
		source: 'SOURCE_URL_HERE',
		projectUrl: 'PROJECT_URL_HERE',
	},
	{
		id: 2,
		title: 'Project 2',
		description:
			'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		skills: ['Skill', 'Skill', 'Skill', 'Skill'],
		image: 'placeholder', // Note: Only enter the name of the file, not the extension
		source: '', // Making source url empty adds disabled source eye
		projectUrl: '', // Making project url removes the preview button
	},
];

export default PROJECTS;
