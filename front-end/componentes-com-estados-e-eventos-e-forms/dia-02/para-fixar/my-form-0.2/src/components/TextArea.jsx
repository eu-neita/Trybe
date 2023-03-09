import React, { Component } from 'react';



class TextArea extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // state = {  }

  render() { 
    const {value, handleChange} = this.props
    return ( 
      <textarea 
      name='textAreaInput'
      value={ value }
      onChange={handleChange} />
     );
  }
}
 
export default TextArea;