import React, { Component } from 'react';

class SayMyName extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div class="say-my-name-component">
        <h1>Hola {this.state.value || "extraño!!"}</h1>
        <label>
          Escribe tu nombre:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}

export default SayMyName;