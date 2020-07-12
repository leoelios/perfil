import React from 'react';

import {
  Container,
  Div,
  SubTitle,
  LabelInput,
  TextArea,
  ButtonStandard,
} from '../../styles/globalStyle';

import {
  Center,
  PhotoUser,
  NameUser,
  PopUpAvaliar,
  MenuIconAvaliation,
  LinearStars,
  StarAvaliation,
  LabelQuantStar,
  StarContext,
  ObservationAv,
  RowName,
  AboutMe,
  ParagraphAboutMe,
} from './mainStyle';

// Photos and Pictures
import imagePhoto from '../../images/myPhoto.jpg';

// Groups of the Main
import AvaliationMain from '../../groups/main/AvaliationMainGroup';
import ProjectsMain from '../../groups/main/ProjectsMainGroup';

interface Props {}

interface State {
  isOpenSendValidation?: boolean;
  handleStar?: boolean;
  selectedStar?: Number;
}

function toggleClassElement(element: HTMLElement | any) {
  element.classList.remove('far');
  element.classList.add('fas');
}

class MainPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpenSendValidation: false,
      selectedStar: undefined,
    };

    // Binding functions with the this
    this.toggleAvaliation = this.toggleAvaliation.bind(this);
  }

  toggleAvaliation(event: any): void {
    const { isOpenSendValidation } = this.state;

    this.setState({
      isOpenSendValidation: !isOpenSendValidation,
    });
  }

  handleClickAvaliation() {
    this.setState({
      handleStar: true,
    });

    setTimeout(() => {
      this.setState({
        handleStar: false,
      });
    }, 200);
  }

  changeStar(element: Number, e: any) {
    // Remove fill of all stars in avaliation
    const stars = document.querySelector('#starsAvaliation')?.children;
    if (stars) {
      for (const star of stars) {
        if (star) {
          star.children[0].classList.remove('fas');
          star.children[0].classList.add('far');
        }
      }
    }

    // Select the star clicked
    if (e.target.tagName === 'I') {
      toggleClassElement(e.target);
    } else {
      toggleClassElement(e.target.children['0']);
    }

    // Set the selected star
    this.setState({
      selectedStar: element,
    });
  }

  render() {
    const { isOpenSendValidation, handleStar, selectedStar } = this.state;

    const stars = [1, 2, 3, 4, 5];

    const starElements = stars.map((element, index) => {
      return (
        <StarAvaliation
          key={`star_${index}`}
          onClick={(e) => {
            this.changeStar(element, e);
          }}
        >
          <i className="far fa-star"></i>
        </StarAvaliation>
      );
    });

    return (
      <Container>
        <Center>
          <PhotoUser src={imagePhoto} />
          <RowName>
            <NameUser>Leonardo E. de Oliveira</NameUser>
            <MenuIconAvaliation href="#" isOpened={handleStar}>
              <i
                onClick={(e) => {
                  this.toggleAvaliation(e);
                  this.handleClickAvaliation();
                }}
                className="fas fa-star"
              ></i>
            </MenuIconAvaliation>
          </RowName>
          <PopUpAvaliar isOpened={isOpenSendValidation}>
            <SubTitle>Qual sua avaliação sobre Leonardo?</SubTitle>
            <StarContext>
              <LinearStars id="starsAvaliation">{starElements}</LinearStars>
              <LabelQuantStar>{selectedStar}</LabelQuantStar>
            </StarContext>
            <ObservationAv isOpened={selectedStar ? true : false}>
              <LabelInput>Observações</LabelInput>
              <TextArea placeholder="Digite aqui uma observação sobre"></TextArea>
              <ButtonStandard>Avaliar</ButtonStandard>
            </ObservationAv>
          </PopUpAvaliar>
          {/* RESTO DO CORPO */}
          <AboutMe>
            <ParagraphAboutMe>
              Olá, sou Leonardo Elias de Oliveira, um desenvolvedor de
              aplicativos, sites, plataformas. Desenvolvo com Javascript,
              Typescript, Java, React. Mantenho organização em projetos e sigo
              padrões de código, faço seu projeto de forma escalavél e seguindo
              as melhores convenções do mercado.
            </ParagraphAboutMe>
          </AboutMe>
          <ProjectsMain />
          <AvaliationMain />
        </Center>
      </Container>
    );
  }
}

export default MainPage;
