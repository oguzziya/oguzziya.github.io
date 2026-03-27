import styled from "styled-components"

const HeaderMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: calc(2*var(--default-margin));
`

const TypewriterHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: calc(2 * var(--text-size));
  text-align: left;
  font-family: var(--font-monospace);
  font-weight: 400;
  margin-top: calc(1*var(--default-margin));
  margin-bottom: calc(1*var(--default-margin));
`

const HeaderDiv = styled.div`
  text-align: left;

  margin-left: var(--default-margin);
  margin-right: var(--default-margin);

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange; }
  }

  p {
    font-family: var(--font-sans-serif);
    font-size: var(--text-size);
    font-weight: 200;
    text-align: left;
    line-height: 1.5em;
  }
`

const PersonalPicDiv = styled.div`
  width: 100%;
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
        <TypewriterHeader>hi. it is oğuz.</TypewriterHeader>
        <p>
          I work in
        </p>
        <ul>
          <li><p>computational science</p></li>
          <li><p>scientific computing</p></li>
          <li><p>multi-physics simulations</p></li>
          <li><p>finite element method (FEM)</p></li>
          <li><p>computational fluid dynamics (CFD)</p></li>
          <li><p>high performance computing (HPC)</p></li>
        </ul>
        <p>
          I got my Master's degree in <em>Computational Science and Engineering (CSE)</em> from Technical University Munich. My Bachelor's degree was from Middle East Technical Univeristy (ODTÜ) in Mechanical Engineering.
        </p>
        <p>
          Feel free to connect if you want to talk about scientific computing, simulations, deep learning, high performance computing, and alike.
        </p>
      </HeaderDiv>
    </HeaderMainDiv>
  )
}