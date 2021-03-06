import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// class HotButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clickCount: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(temp) {
//     this.setState(() => ({
//       clickCount: (this.state.clickCount + 1)
//     }));
//   }

//   render() {
//     if (this.state.clickCount < 3) {
//       return (
//         <button onClick={this.handleClick} className='hot-button start'>Hot Button</button>
//       );
//     } else if (this.state.clickCount >= 3 && this.state.clickCount < 6) {
//       return (
//         <button onClick={this.handleClick} className='hot-button cold'>Hot Button</button>
//       );
//     } else if (this.state.clickCount >= 6 && this.state.clickCount < 9) {
//       return (
//         <button onClick={this.handleClick} className='hot-button cool'>Hot Button</button>
//       );
//     } else if (this.state.clickCount >= 9 && this.state.clickCount < 12) {
//       return (
//         <button onClick={this.handleClick} className='hot-button tepid'>Hot Button</button>
//       );
//     } else if (this.state.clickCount >= 12 && this.state.clickCount < 15) {
//       return (
//         <button onClick={this.handleClick} className='hot-button warm'>Hot Button</button>
//       );
//     } else if (this.state.clickCount >= 15 && this.state.clickCount < 18) {
//       return (
//         <button onClick={this.handleClick} className='hot-button hot'>Hot Button</button>
//       );
//     } else if (this.state.clickCount >= 18) {
//       return (
//         <button onClick={this.handleClick} className='hot-button nuclear'>Hot Button</button>
//       );
//     }
//   }
// }

function HotButtonHook() {
  const [count, clickCount] = useState(0);

  if (count < 3) {
    return (
      <button onClick={() => clickCount(count + 1)} className='hot-button start'>Hot Button</button>
    );
  } else if (count >= 3 && count < 6) {
    return (
      <button onClick={() => clickCount(count + 1)} className='hot-button cold'>Hot Button</button>
    );
  } else if (count >= 6 && count < 9) {
    return (
      <button onClick={() => clickCount(count + 1)} className='hot-button cool'>Hot Button</button>
    );
  } else if (count >= 9 && count < 12) {
    return (
      <button onClick={() => clickCount(count + 1)} className='hot-button tepid'>Hot Button</button>
    );
  } else if (count >= 12 && count < 15) {
    return (
      <button onClick={() => clickCount(count + 1)} className='hot-button warm'>Hot Button</button>
    );
  } else if (count >= 15 && count < 18) {
    return (
      <button onClick={() => clickCount(count + 1)} className='hot-button hot'>Hot Button</button>
    );
  } else if (count >= 18) {
    return (
      <button onClick={() => clickCount(count + 1)} className='hot-button nuclear'>Hot Button</button>
    );
  }
}

const root = document.querySelector('#root');
ReactDOM.render(<HotButtonHook />, root);
