import Header from "@/components/Header"
import Detail from "@/components/Detail"
import styled from "styled-components";
import Link from "@/components/Link";

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
    font-size: calc(1.5 * var(--text-size));
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


export default function Home() {
  return (
    <HomeDiv>
    <HeaderRegionDiv>
      <Header />
    </HeaderRegionDiv>
      <DetailsDiv>
        <h1>things I work on</h1>
        <h2>Performance Analysis and Modeling Engineer at imec</h2>
        <Detail>
          <p>Currently, I am working as an R&D engineer at <Link href="https://www.imec-int.com/en" target="_blank">imec</Link>, <Link href="https://www.imec-int.com/en/expertise/compute-system-architecture" target="_blank">Compute System Architecture (CSA)</Link>. department</p>
          <p>
          My work focuses on workload characterization of HPC and AI workloads, performance modeling of next generation architectures, and performance analysis of workloads on scale-up and scale-out systems.
          </p>
        </Detail>
        <h2>Finite Element Framework Developer at Siemens</h2>
        <Detail>
          <p>I worked as a C++ developer in Siemens DISW, developing and improving the finite element framework of Simcenter StarCCM+. The finite element framework serves as a computational backend to the solid stress and electromagnetism physics. Here is <Link href="https://blogs.sw.siemens.com/simcenter/fsi-heart-valve-cfd" target="_blank">a cool multi-physics simulation video of a heart valve</Link>, which is carried out using the finite element framework of StarCCM+.</p>
          <p>
          Some of my contributions were redesigning the p-FEM architecture for improved reusabilty, maintenance and performance, improving accuracy and usability of higher-order post-processing, CPU performance benchmarking of the dense linear algebra backend, designing a modular and performant backend for composable material models. I've also contributed to the development of stabilization and coupling methods for fluid-structure interaction simulations.</p>
          <p>
          As a side project, I developed a GPU native FEM solver in C++ and CUDA.
          </p>
        </Detail>
        <h2>Master's in Computational Science and Engineering at TUM</h2>
        <Detail>
            <p>For my thesis, I've developed particle formation and combustion models to simulate nanoparticle production in OpenFOAM. Particle formation is modeled using General Dynamics Equation, while the for the combustion we've used Flamelet Generated Manifold. I extended the classical FGM model to account for multiple fuel tables during the simulation.</p>

            <p>I contributed to open-source multi-physics coupling library<Link href="https://precice.org/" target="_blank">preCICE</Link> where I developed features such as conservative-consistent (scaled consistent) data mapping on interfaces, tracking the interface integral values, multi-coupling of arbitrary number of physics solvers, improving the performance of RBF and nearest projection data mappings.</p>

            <p>Also, I worked on fully differentiable solver<Link href="https://tum-pbs.github.io/PhiFlow/" target="_blank">PhiFlow</Link> which is used for Physics-Informed Neural Networks (PINNs).
            There, I analyzed memory transfer patterns between CPU and GPU in higher level, also experimented with Numba for Just-in-Time compilation and JAX backend.</p>
        </Detail>
        <h2>Bachelor's in Mechanical Engineering at METU</h2>
        <Detail>
            <p>During my undergraduate studies, I've mainly focused on fluid mechanics, gas dynamics, computational fluid dynamics, finite element analysis, and mesh generation.
            </p>
        </Detail>
        <h1>apart from scientific computing</h1>
        <Detail>
            <p>I enjoy, lifting, boxing, running, cycling, playing tennis, and tinkering with embedded programming. Time to time I like to DJ as well.</p>
        </Detail>
      </DetailsDiv>
    </HomeDiv>
  );
}
