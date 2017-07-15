var React = require('react');
var InstagramEmbed = require('react-instagram-embed');

class ContentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSquare() {
    const item = this.props.item;
    //assume everything is an image except instagram
    if (urlContains(item.medialink1, "instagram")) {
      //do the instagram thing
    } else if (checkURL(item.medialink1)) {
      return <img className="square"
                  src={item.medialink1}/>;
    } else if (urlContains(item.medialink1, "youtube")) {
      var src = item.medialink1;
      return <iframe className="square"
                    type="text/html"
                    width="300px"
                    height="200px"
                    src={src}/>
    }

    //utility methods ---------------------------
    function checkURL(url) {
        return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    function urlContains(url, contains) {
      return url.indexOf(contains) >= 0;
    }

    function onVideoRender(event) {
      event.target.pauseVideo();
    }

    // return <div>hi</div>


    //TODO figure out wtf is wrong with this:
    // return <InstagramEmbed url='https://instagr.am/p/Zw9o4/' />

  }

  render() {
    const item = this.props.item;

    return (
      <div className = "content-item">
        {this.renderSquare()}
        <span className="title">{item.title}</span>
        <span className="description"> this is desc </span>
        <span className="hash-tag">#singlehashtag</span>
      </div>
    )
  }
}




module.exports = ContentItem;
