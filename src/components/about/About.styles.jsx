import styled from 'styled-components';

export const AboutContainer = styled.div`
	padding: 100px 0;
	margin: 0 15%;
	width: 70%;

	@media only screen and (max-width: 768px) {
		margin: 0 5%;
		width: 90%;
	}
`;

export const Text = styled.div`
	font-size: 1.1rem;
	color: #868686;
	padding-bottom: 10px;

	@media only screen and (max-width: 768px) {
		font-size: 1rem;
	}
`;

export const Title = styled.div`
	font-weight: 600;
	font-size: 2rem;
	color: #ddd;
	padding-bottom: 2rem;
`;

export const TechnologyContainer = styled.div`
	display: flex;
	flex-wrap: wrap;

	ul > li {
		color: #868686;
	}
`;

export const TechnologyList = styled.ul`
	margin: 0.2rem 0;
`;

export const Blue = styled.span`
	color: #0070c9;
	font-weight: 600;
`;
