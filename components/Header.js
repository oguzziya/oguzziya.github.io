import styled from "styled-components"
import Link from "@/components/Link"

const HeaderMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: calc(2*var(--default-margin));
  margin-bottom: calc(2*var(--default-margin));
`

const HeaderDiv = styled.div`
  text-align: left;

  margin-right: var(--default-margin);

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
  }

  h1 {
    font-size: calc(2 * var(--text-size));
    text-align: left;
    font-family: var(--font-monospace);
    font-weight: 400;
  }

  p {
    font-family: var(--font-sans-serif);
    font-size: calc(1.2 * var(--text-size));
    font-weight: 200;
    text-align: left;
    line-height: 1.5em;
  }
`

const PersonalPicDiv = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  img {
    clip-path: circle();
    width: 128px;
  }
`

export default function Header() {
  return (
    <HeaderMainDiv>
      <PersonalPicDiv>
        <img src="personal_photo.jpeg"/>
      </PersonalPicDiv>
      <HeaderDiv>
        <h1>hi. it is oğuz.</h1>
        <p>
          I work in scientific computing, HPC, computer architecture, physics simulations, deep learning, and AI. Feel free to connect if you want to talk about these topics.
        </p>
      </HeaderDiv>
    </HeaderMainDiv>
  )
}