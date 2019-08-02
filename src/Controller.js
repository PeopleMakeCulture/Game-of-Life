import React from 'react';
import './App.css';

function Controller() {
  return (
	  <div id='control_panel'>
	    <button id='step_btn' class='button'>Step</button>
	    <button id='play_btn' class='button'>Play</button>
	    <button id='reset_btn' class='button'>Reset Random</button>
	    <button id='clear_btn' class='button'>Clear</button>
	  </div>
  );
}

export default Controller