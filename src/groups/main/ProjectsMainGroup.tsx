import React from 'react';
import Carousel from 'nuka-carousel';
import {
  BoxProjects,
  Project,
  Projects,
  ButtonSlider,
} from './ProjectsMainStyle';

class ProjectsMain extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      currentProject: 1,
    };
  }

  render() {
    return (
      <BoxProjects>
        <h2>Projetos entregues</h2>
        <Projects id="container-projects">
          <Carousel
            autoplay={true}
            heightMode="max"
            pauseOnHover={true}
            speed={150}
            renderCenterLeftControls={({ previousSlide }) => (
              <ButtonSlider onClick={previousSlide}>
                <i className="fas fa-angle-left"></i>
              </ButtonSlider>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <ButtonSlider onClick={nextSlide}>
                <i className="fas fa-angle-right"></i>
              </ButtonSlider>
            )}
            width="600px"
            cellAlign="center"
            transitionMode="scroll3d"
            autoplayReverse={true}
          >
            <Project>Projeto 1</Project>
            <Project>Projeto 2</Project>
            <Project>Projeto 3</Project>
          </Carousel>
        </Projects>
      </BoxProjects>
    );
  }
}

export default ProjectsMain;
