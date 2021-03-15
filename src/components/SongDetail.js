import React from 'react';
import { connect } from 'react-redux';
 
const SongDetail = ({ songDetail }) => {
    if (!songDetail) {
      return <div><h3>Select a Song</h3></div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <h4>Title: {songDetail.title}</h4>
        <p>
          Artist: {songDetail.artist}
        <br/>
          Released year: {songDetail.released}
        <br/>
          Length: {songDetail.length}
        </p>
      </div>
    )
};

const mapStateToProps = (state) => {
  return {
    songDetail: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);