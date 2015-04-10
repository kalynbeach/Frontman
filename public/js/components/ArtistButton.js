// Artist List Button Component

var ArtistButton = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
  },

  render: function() {
    return (
      <div className="artist-list-button" onClick={this.handleClick}>
        <div className="artist-list-button-name">
          {this.props.name}
        </div>
      </div>
    );
  }

});
