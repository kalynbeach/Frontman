// Artists List Component

var ArtistsList = React.createClass({

  getInitialState: function() {
    return {
      artists: this.props.artists
    }; 
  },

  render: function() {
    var _setSelectedArtist = this.props.setSelectedArtist;

    // Map the artists to Artist Button components
    var artistElementsArray = this.props.artists.map(function(artist) {
      return (
        <ArtistButton
          key={artist.id}
          name={artist.data.displayName}
          artist={artist}
          setSelectedArtist={_setSelectedArtist}
        />
      );
    });

    return (
      <div className="col-sm-3 body-col">
        <div className="body-section" id="artists-list">
          <ul className="artists-list-element">
            {artistElementsArray}
          </ul>
        </div>
      </div>
    );
  }

});
