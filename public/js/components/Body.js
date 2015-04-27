// Frontman Body Component

var Body = React.createClass({

  render: function() {
    return (
      <div className="row">
        <ArtistsList
          artists={this.props.artists}
          setSelectedArtist={this.props.setSelectedArtist}
        />
        <ArtistDisplay
          selectedArtist={this.props.selectedArtist}
        />
        <Upcoming />
      </div>
    );
  }

});