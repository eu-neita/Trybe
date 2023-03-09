import React, { Component } from 'react';

class Text extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {  }
  render() { 
    const {value, handleChange} = this.props
    return ( 
      <input type='text' name='inputValueText' value={ value } onChange={handleChange} />
     );
  }
}
 
export default Text;