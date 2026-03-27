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
    font-family: var(--font-sans-serif);
    font-weight: 200;
    padding-top: calc(var(--default-margin));
    padding-bottom: calc(0.5*var(--default-margin));
    text-align: right;
  }
  
  h2 {
    font-size: calc(1.2 * var(--text-size));
    font-family: var(--font-monospace);
    font-weight: 400;
    font-style: normal;
  }
`

const EffectLink = styled.span`
a
{
  --c: black; /* the color */
  
  color: #0000;
  background: 
    linear-gradient(90deg,black 50%,var(--c) 0) calc(100% - var(--_p,0%))/200%,
    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) no-repeat,
    var(--_c,#0000);
  -webkit-background-clip: text,padding-box,padding-box;
          background-clip: text,padding-box,padding-box;
  transition: 0.5s;

  border-radius: 0.2rem;
  padding: 0.2rem;
}

a:hover {
  color: #fff;
  --_p: 100%;
}
`


export default function Home() {
  return (
    <HomeDiv>
    <HeaderRegionDiv>
      <Header />
    </HeaderRegionDiv>
      <DetailsDiv>
        <h1>things that I worked on</h1>
        <h2>Finite Element Framework Developer in Simcenter StarCCM+</h2>
        <Detail
          information={
          <div>
          <p>I am currently working as a C++ developer in <em>Siemens DISW</em>, developing and improving the finite element framework of <em>Simcenter StarCCM+</em>. Finite element framework serves as a computational backend to the solid stress and electromagnetism physics.
          </p>
          <p>
          Some of my contributions were redesigning the p-FEM architecture for improved reusabilty and maintenance, improving accuracy and usability of higher-order post-processing, CPU performance benchmarking and improvements of core FEA components.</p>
          <p>
          As a side project, I am also working on a GPU native FEM solver in C++ and CUDA these days.
          </p>
          </div>}>  
        </Detail>
        <h2>Master's in Computational Science and Engineering at TUM</h2>
        <Detail
          information={
            <div>For my thesis, I've developed particle formation and combustion models to simulate nanoparticle production in OpenFOAM. Particle formation is modeled using General Dynamics Equation, while the for the combustion we've used Flamelet Generated Manifold. I extended the classical FGM model to account for multiple fuel tables during the simulation.</div>
          }
        >
        </Detail>
        <Detail
          information={
            <div>I contributed to open-source multi-physics coupling library<EffectLink><a href="https://precice.org/"><b>preCICE</b></a></EffectLink> where I developed features such as conservative-consistent data mapping on interfaces, tracking the interface integral values, multi-coupling of arbitrary number of physics solvers.</div>
          }
        >
        </Detail>
        <Detail
          information={
            <div>Also, I worked on fully differentiable solver<EffectLink><a href="https://tum-pbs.github.io/PhiFlow/"><b>PhiFlow</b></a></EffectLink> which is used for Physics-Informed Neural Networks (PINNs).
            There, I analyzed memory transfer patterns between CPU and GPU in higher level, also experimented with Numba for Just-in-Time compilation and JAX backend.
            </div>
          }
        >
        </Detail>
        <h1>apart from scientific computing</h1>
        <Detail
          information={
            <div>I enjoy, lifting, running, cycling, playing tennis, and tinkering with embedded programming. Time to time I like to DJ as well.</div>
          }
        >
        </Detail>
      </DetailsDiv>
    </HomeDiv>
  );
}
