import React from 'react';
import { Container, Div } from '../../styles/globalStyle';
import { Center, PhotoUser, NameUser, PopUpAvaliar } from './mainStyle';
import { MenuIcon } from '../../partials/headerGeralStyle';

import imagePhoto from '../../images/myPhoto.jpg';
import AvaliationMain from '../../groups/main/AvaliationMainGroup';

interface Props {}

interface State {
  isOpenSendValidation?: boolean;
}

class MainPage extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isOpenSendValidation: false,
    };

    // Binding functions with the this
    this.toggleAvaliation = this.toggleAvaliation.bind(this);
  }

  toggleAvaliation(event: any): void {
    const { isOpenSendValidation } = this.state;

    if (event.type === 'mouseleave') {
      setTimeout(() => {
        this.setState({
          isOpenSendValidation: !isOpenSendValidation,
        });
      }, 500);
    } else {
      this.setState({
        isOpenSendValidation: true,
      });
    }
  }

  render() {
    const { isOpenSendValidation } = this.state;

    return (
      <Container>
        <Center>
          <PhotoUser src={imagePhoto} />
          <Div.row>
            <NameUser>Leonardo Elias de Oliveira</NameUser>
            <MenuIcon href="#">
              <i
                onMouseEnter={this.toggleAvaliation}
                onMouseLeave={this.toggleAvaliation}
                className="fas fa-star"
              ></i>
            </MenuIcon>
          </Div.row>
          <PopUpAvaliar
            onMouseEnter={this.toggleAvaliation}
            isOpened={isOpenSendValidation}
          />
          <AvaliationMain />
        </Center>
      </Container>
    );
  }
}

export default MainPage;
