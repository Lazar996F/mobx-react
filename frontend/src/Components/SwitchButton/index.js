import React, { Component } from 'react';
import StyledSwitch from './style';

class SwitchButton extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    const isActive = this.state.checked ? 'Activated' : 'Deactivated';

    return (
      <label className="d-flex align-items-center">
        <p className="mr-15 mb-0 text-bold-600">{ isActive }</p>
        <StyledSwitch
          onChange={ (checked) => {
            this.handleChange(checked);
            this.props.onActivateChange(checked)
          } }
          checked={ this.state.checked }
          onColor="000000"
          offColor="#B5B5B5"
          checkedIcon={ false }
          uncheckedIcon={ false }
        />
      </label>
    );
  }
}

export default SwitchButton;
