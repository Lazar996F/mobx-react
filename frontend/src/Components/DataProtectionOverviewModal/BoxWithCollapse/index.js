import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import { Box } from './style';
import ArrowRight from '../../Arrow/Right';
import SwitchButton from '../../SwitchButton';

class BoxWithCollapse extends Component {
  state = {
    isOpen: false
  }

  render() {
    const { isOpen } = this.state
    const { active, title, children } = this.props

    const toggle = () => this.setState({ isOpen: !isOpen })

    const onActivateChange = (activated) => {
      console.log(">>>Did Functional cookies active? >", activated)
    }

    return (
      <>
        <Box onClick={ toggle } cursorPointer={ active === 'always' }>
          <div className="d-flex">
            <ArrowRight/>
            <h3>{ title }</h3>
          </div>
          { active === 'always' ? <p className="text-bold-600 mb-0">always active</p> :
            <SwitchButton onActivateChange={ onActivateChange }/> }
        </Box>
        { (children || active === 'always') && <Collapse isOpen={ isOpen }>{ children }</Collapse> }
      </>
    );
  }
}

export default BoxWithCollapse;
