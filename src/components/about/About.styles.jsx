import styled from 'styled-components';

export const MainContainer = styled.div`
	background: #040202;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	height: 500px;
	@media only screen and (max-width: 768px) {
		height: 600px;
	}
`;

export const AboutContainer = styled.div`
	padding-bottom: 2rem;
	width: 1200px;
	@media (max-width: 1400px) {
		width: 1000px;
	}
	@media (max-width: 1200px) {
		width: 800px;
	}
	@media (max-width: 968px) {
		width: 700px;
	}
	@media (max-width: 768px) {
		width: 300px;
	}
`;

export const Text = styled.div`
	font-size: 1.1rem;
	color: #868686;
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
	cursor: default;
	padding-bottom: 10px;
`;

export const HeadingContainer = styled.div`
	font-weight: 800;
	font-size: 2rem;
	color: #ddd;
	@media only screen and (max-width: 768px) {
		padding-top: 40px;
		font-size: 2.2rem;
	}
	padding-bottom: 2rem;
	cursor: default;
`;

export const SkillContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const ListItem = styled.li`
	color: #868686;
	font-size: 1.1rem;
	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const Blue = styled.span`
	color: #0070c9;
	font-weight: 600;
`;
