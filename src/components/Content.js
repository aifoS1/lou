var React = require('react');
var ContentItem = require('./ContentItem');

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const contentList = this.props.list;
    return (
      <div className="content">
      {contentList.map((content) =>
        <ContentItem key={content.id}
                     item={content}>
        </ContentItem>
      )}
      </div>
    );
  }
}

module.exports = Content;
