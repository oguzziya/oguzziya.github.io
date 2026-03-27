import Header from "@/components/Header"
import Detail from "@/components/Detail"
import styled from "styled-components";

const HomeDiv = styled.div`
  scroll-snap-type: y mandatory;
  padding-bottom: 10rem;
`

const HeaderRegionDiv = styled.div`
  display: grid;

  z-index: 100;
  background: white;
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
`

const DetailsDiv = styled.div`

  align-items: top;

  margin-left: var(--default-margin);
  margin-right: var(--default-margin);
  
  h1 {
    font-size: calc(2 * var(--text-size));
    font-family: var(--font-monospace);
    font-weight: 200;
    padding-top: calc(3*var(--default-margin));
  }
  
  h2 {
    font-size: calc(1.2 * var(--text-size));
    font-family: var(--font-serif);
    font-weight: 200;
    font-style: italic;
  }
`

export default function Home() {
  return (
    <HomeDiv>
    <HeaderRegionDiv>
      <Header />
    </HeaderRegionDiv>
      <DetailsDiv>
        <h1>things that I work on</h1>
        <h2>Currently,</h2>
        <Detail
          information={
          <div>
          <p>I am working as a C++ developer in <b>Siemens DISW</b>, developing and improving the finite element framework of <b>Simcenter StarCCM+</b>. Mainly contributing to the <b>p-FEM</b> architecture, higher-order post-processing, <b>CPU performance</b> of core FEA components.</p>
          <p>
            I am also working on a GPU native FEM solver in C++ and CUDA these days.
          </p>
          </div>}>  
        </Detail>
        <h2>During my Master's,</h2>
        <Detail
          information={
            <div>For my thesis, I've developed particle formation and combustion models to simulate nanoparticle production in OpenFOAM. Particle formation is modeled using General Dynamics Equation, while the for the combustion we've used Flamelet Generated Manifold. I extended the classical FGM model to account for multiple fuel tables during the simulation.</div>
          }
        >
        </Detail>
        <Detail
          information={
            <div>I contributed to open-source multi-physics coupling library <a href="https://precice.org/"><b>preCICE</b></a> where I developed features such as conservative data mapping on interfaces, tracking the interface integral values, multi-coupling of arbitrary number of physics solvers.</div>
          }
        >
        </Detail>
        <Detail
          information={
            <div>Also, I worked on fully differentiable solver <a href="https://tum-pbs.github.io/PhiFlow/"><b>PhiFlow</b></a> which is used for Physics-Informed Neural Networks (PINNs).
            There, I analyzed memory transfer patterns between CPU and GPU in higher level, also experimented with Numba for Just-in-Time compilation and JAX backend.
            </div>
          }
        >
        </Detail>
        <h1>apart from scientific computing</h1>
        <Detail
          information={
            <div>I enjoy, lifting, running, cycling, tinkering with embedded programming. Time to time I like to DJ as well.</div>
          }
        >
        </Detail>
      </DetailsDiv>
    </HomeDiv>
  );
}
