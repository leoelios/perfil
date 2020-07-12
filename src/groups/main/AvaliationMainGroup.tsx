import React from 'react';
import {
  BoxAvaliations,
  StarAvaliation,
  StarsOfAvaliation,
  Avaliation,
} from './AvaliationMainStyle';

interface Avaliation {
  scale: Number;
  text: String;
}

class AvaliationMain extends React.Component {
  render() {
    const avaliations = [
      {
        scale: 5,
        text: 'Profissional Competente',
      },
      {
        scale: 3,
        text: 'Muito bom de trabalho',
      },
    ];

    const avaliationList = avaliations.map((avaliation: Avaliation) => {
      const arrayTemp = [];
      let quantity: any = avaliation.scale;

      while (quantity !== 0) {
        arrayTemp.push(1);
        quantity--;
      }

      const renderStars = arrayTemp.map(() => {
        return (
          <StarAvaliation>
            <i className="fas fa-star"></i>
          </StarAvaliation>
        );
      });

      return (
        <Avaliation>
          <StarsOfAvaliation>{renderStars}</StarsOfAvaliation>
          <p>{avaliation.text}</p>
        </Avaliation>
      );
    });

    return (
      <BoxAvaliations>
        <h2>Avaliações dos clientes</h2>
        {avaliationList}
      </BoxAvaliations>
    );
  }
}

export default AvaliationMain;
