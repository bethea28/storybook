import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import '../css/PlayerCard.css';

const playerQuery = gql`
  query Player($id: Float!) {
    player(id: $id) {
      opta_id
      full_name
      known_name
      image {
        original
        token
      }
      jersey
      position
    }
  }
`;

const clubQuery = gql`
  query Club($id: Float!) {
    club(id: $id) {
      opta_id
      name {
        full
      }
      logo {
        original
        token
      }
    }
  }
`;

const positionMap = new Map([
  ['DEF', 'Defense'],
  ['MID', 'Midfielder'],
  ['GK', 'Goalkeeper'],
  ['D-M', 'Defense Midfielder'],
  ['FWD', 'Forward'],
]);

/**
 * Get the Image URL for a certain size.
 * @param {string} tokenURL
 * @param {object} imageProps
 */
const imageSize = (tokenURL, { height, width }) => {
  return tokenURL.replace('{{width}}', width).replace('{{height}}', height);
};

/**
 * The Club display in the Player Card component.
 * @type Component
 * @param {*} props
 */
const PlayerCardClub = props => (
  <Query query={clubQuery} variables={{ id: props.clubID }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Retrieving club data. One moment please.</p>;
      if (error) return <p>Something went wrong.</p>;

      return <h4>{data.club.name.full}</h4>;
    }}
  </Query>
);

/**
 * Player Card, as shown in the editor.
 * @type Component
 */
class PlayerCard extends Component {
  renderCard = playerData => {
    const { clubID } = this.props;

    let position, jersey;
    if (playerData.position) {
      position = <h5>{positionMap.get(playerData.position)}</h5>;
    }
    if (playerData.jersey) {
      jersey = <div className="player-card-jersey">{playerData.jersey}</div>;
    }

    const imageURL = imageSize(playerData.image.token, {
      height: 250,
      width: 250,
    });

    return (
      <div className="player-card">
        <img src={imageURL} alt={`${playerData.full_name} logo`} />
        <div>
          <h2>{playerData.full_name}</h2>
          <PlayerCardClub clubID={clubID} />
          {position}
          {jersey}
        </div>
      </div>
    );
  };

  render = () => {
    const { playerID } = this.props;

    if (!playerID) return <p>Use the select box to choose a player.</p>;

    return (
      <Query query={playerQuery} variables={{ id: playerID }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Retrieving player data. One moment please.</p>;
          if (error) return <p>Something went wrong.</p>;
          return this.renderCard(data.player);
        }}
      </Query>
    );
  };
}

export default PlayerCard;
