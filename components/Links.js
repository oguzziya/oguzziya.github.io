import styled from "styled-components"

const LinksDiv = styled.div`
  text-align: center;
  bottom: 0;
  position: sticky;

  img {
    filter: saturate(500%) contrast(800%) brightness(500%) 
      invert(0%)
  }

  background: white;
  height: 3rem;
`
const LinkIcon = styled.img`
  padding-top: 0.5rem;
  width: 24px;
  height: auto;
`

export default function Links()
{
  return (
    <LinksDiv>
      <a href="https://www.github.com/oguzziya" target="_blank" className="link">
        <LinkIcon src="/icons/github-mark-black.png"/>
      </a>
      
      <a href="https://www.linkedin.com/in/oguzziya/" target="_blank" className="link">
        <LinkIcon src="/icons/linkedin-mark-black.png"/>
      </a>
      
      <a href="https://www.instagram.com/turbulent.radler/" target="_blank" className="link">
        <LinkIcon src="/icons/instagram-mark-black.png"/>
      </a>
      
      <a href="https://www.soundcloud.com/turbulentradler/" target="_blank" className="link">
        <LinkIcon src="/icons/soundcloud-mark-black.png"/>
      </a>
    
    </LinksDiv>
  ) 
}