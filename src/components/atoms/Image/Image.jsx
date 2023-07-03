import { styled } from "styled-components";

const Image = styled.img`
${({height = '100%'})=> `height:${height}`};
${({width = '100%'})=> `width:${width}`};
`
export default Image