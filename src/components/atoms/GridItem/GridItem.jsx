import { styled } from "styled-components"
const GridItem = styled.div`
position:relative;
${({colSpan})=>colSpan && `grid-column-end:span ${colSpan}`};
${({rowSpan})=>rowSpan && `grid-row-end:span ${rowSpan}`};
${({area})=>area && `grid-area:${area}`};
${({colStart})=>colStart && `grid-column-start: ${colStart}`};
${({rowStart})=>rowStart && `grid-row-start:span ${rowStart}`};
${({column})=>column && `grid-column: ${column}`};
${({row})=>row && `grid-row:span ${row}`};
${({justifyContent})=>justifyContent && `justify-content:${justifyContent}`};
${({alignItems})=>alignItems && `justify-content:${alignItems}`};
${({middle})=>middle && `display:inline-flex;flex-flow:column nowrap;justify-content:center;justify-self:stretch` };
${({textAlign})=>textAlign && `text-align:${textAlign}`};

@media (max-width:1200px){
    ${({smTextAlign})=>smTextAlign && `text-align:${smTextAlign}`};
}

`

export default GridItem
