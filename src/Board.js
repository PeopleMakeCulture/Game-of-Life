import React from 'react';
import './App.css';
import { connect } from 'react-redux'

const Board = () => {
  return (
    <div id="container">
      <table id='board'>
        
      </table>
    </div>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    board: state.board
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)