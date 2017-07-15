var React = require('react');


class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <span className="icon-wrapper">
          <span className="home-button">
            <span>LOU</span>
          </span>
        </span>


        <span className="page-info">HEADER CONTENT TO GO HERE</span>
      </div>
    );
  }
}

module.exports = Header;
