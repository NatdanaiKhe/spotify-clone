import styled from 'styled-components';

const Card = styled.div<{ $width?: string; $height?: string;$radius?: string }>`
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
  width: ${props => props.$width || "100%"};
  height: ${props => props.$height || "100%"};
  border-radius: ${props => props.$radius || "0.5rem"};
`;
export default Card;