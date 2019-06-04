import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  resizeCanvas = (event) => {
    event.key == 'a' ? resize('+') : resize('-')
  }

  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyPress={this.resizeCanvas}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
