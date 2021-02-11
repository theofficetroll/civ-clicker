import React from 'react';

class Game extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      people: {
        population: 10,
        maxPopulation: 10,
      },
      buildings: {
        huts: 4,
        warehouse: 1,
      },
      goods: {
        food: 100,
        wood: 0,
        stone: 0,
      },
      foodStorage: 100,
    };
  }

  render() {
    return (
      <div>
        <div className="data">
          Population: {this.state.people.population} / {this.state.people.maxPopulation}
          Huts: {this.state.buildings.huts}
          Food: {this.state.goods.food} / {this.state.foodStorage}
          Wood: {this.state.goods.wood}
        </div>
        <br />
        <div className="jobs">
          Idle Population:
          Hunters:
          Gatherers:
          Lumberjacks:
        </div>
        <br />
        <div className="actions">
          Build a Hut
        </div>
      </div>
    )
  }
}

export default Game;