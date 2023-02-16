import React, { Component } from "react";
import CardBox from "../card-box/card-box.component";
import "./card-list.styles.css";

export class CardList extends Component {
  render() {
    const { filterMonsters } = this.props;
    return (
      <div className="card-list">
        {filterMonsters.map((newMonster) => {
          return <CardBox monster={newMonster} />;
        })}
      </div>
    );
  }
}

export default CardList;
