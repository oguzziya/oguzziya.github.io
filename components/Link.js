import styled from "styled-components";

const EffectLink = styled.span`
a
{
  --c: black; /* the color */
  
  color: #4f4e4eff;
  background: 
    linear-gradient(90deg,black 50%,var(--c) 0) calc(100% - var(--_p,0%))/200%,
    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) no-repeat,
    var(--_c,#0000);
  -webkit-background-clip: text,padding-box,padding-box;
          background-clip: text,padding-box,padding-box;
  transition: 0.5s;

  border-radius: 0.2rem;
  padding: 0.2rem;
  text-decoration: none; 
  font-weight: 500;
}

a:hover {
  color: #fff;
  --_p: 100%;
}
`

export default function Link({ href, target, children }) {
  return (
    <EffectLink>
      <a href={href} target={target}>{children}</a>
    </EffectLink>
  )
}
