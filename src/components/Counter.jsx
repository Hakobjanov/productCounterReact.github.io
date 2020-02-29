import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState)
    console.log(prevProps)
  }
  // constructor() {
  //   super();
  //   this.handleInc = this.handleInc.bind(this)
  // }

  formatCount = () => {
      const { value: value } = this.props.counter
      return value === 0 ? 'Zero' : value
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
    return classes;
}


  render() {
    const {
      onHandleInc,
      onDelete,
      counter
    } = this.props
    return (
      <div>
       <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
          className='btn btn-secondary btn-sm'
          onClick={() => onHandleInc(counter)}>Increment</button>

        <button 
          className='btn btn-danger btn-sm m-2'
          onClick={() => onDelete(counter.id)}>DELETE</button>
      {/* <ul>
          {this.state.tags.map((tag) => {return <li key={findRenderedDOMComponentWithTag}>{ tag }</li> })}
      </ul> */}
      </div>
    );
  }

    
}

export default Counter;
