var React = require('react');

var Header = require('./Header');
var Content = require('./Content');

var ResourceLibrary = require('../models/ResourceLibrary');

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {hi: "hello"};
    this.resourceLibrary = new ResourceLibrary();
    console.log("Resource library!", this.resourceLibrary);
  }
  render(){
    return (
      <div>
        <Header/>
        <Content list={this.resourceLibrary.library}/>
      </div>

    );
  }
}


module.exports = App;
