import styled from 'styled-components';

export const ProjectsContainer = styled.div`
	margin: 5rem 0;
	display: flex;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 768px) {
		margin: 0 5%;
		width: 90%;
	}
`;

export const MainContainer = styled.div`
	width: 70%;

	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

export const Title = styled.div`
	font-weight: 600;
	font-size: 2rem;
	color: #ddd;
	padding-bottom: 40px;
`;

export const CardsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
