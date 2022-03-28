import styled from "styled-components";

const NavWrapper = styled.div`
display:flex;
flex-direction: row;
gap:16px
	@media only screen and (max-width: 650px) {
		display: none;
	}
`;

export {NavWrapper}