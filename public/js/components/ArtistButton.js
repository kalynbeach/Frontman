// Artist List Button Component

var ArtistButton = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
    this.props.setSelectedArtist(this.props.artist);

    // TESTING
    console.log("Artist " + this.props.name + " clicked.");
  },

  render: function() {
    return (
      <li className="artist-list-button" onClick={this.handleClick}>
        <div className="artist-list-button-name">
          {this.props.name}
        </div>
      </li>
    );
  }

});
