import { styled } from "styled-components";

const Grid = styled.div`
display:grid;
grid-template-columns:${({columns})=> typeof columns === "number" ? `repeat(${columns},1fr)` : columns};
gap:${({gap})=> gap ? `${gap}px` : `5px` };
${({areas})=>areas && `grid-tempalte-areas:${areas}`};
grid-auto-flow:${(flow)=>flow ? flow : 'row'};
${({autoColumns})=>autoColumns && `grid-auto-columns:${autoColumns}`};
${({autoRows})=>autoRows && `grid-auto-columns:${autoRows}`};
${({columnGap})=>columnGap && `grid-column-gap:${columnGap}`};
${({rowGap})=>rowGap && `grid-column-gap:${rowGap}`};
${({justifyContent})=>justifyContent && `justify-content:${justifyContent}`};
${({alignItems})=>alignItems && `align-items:${alignItems}`};

@media (max-width:1200px){
    grid-template-columns:${({smColumns})=> typeof smColumns === "number" ? `repeat(${smColumns},1fr)` : smColumns};
}

}
`


export default Grid;
