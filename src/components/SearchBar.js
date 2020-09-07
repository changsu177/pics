import React from 'react';

// for input pass in the reference to the function so that the input can call
// call this function at some point in the future.... so no parenthese
class SearchBar extends React.Component {
  state = {term: ''};
  onFormSubmit = (event) => {
    event.preventDefault();
//use props in a class-based component -- use this to refer to the props
    this.props.onSubmit(this.state.term);
  };

  //a callback function
  // onInputChange( event ) {
  //   console.log(event.target.value);
  // }
  //(e) => console.log(e.target.value)

  render() {
    return (
      <div className = 'ui segment'>
        <form onSubmit = {this.onFormSubmit} className = 'ui form'>
        <label> image search </ label>
          <input
            type = "text"
            value = {this.state.term}
            onChange = {(e) => this.setState( {term: e.target.value })}
          />
        </form>
      </div>);
  }
}

export default SearchBar;
