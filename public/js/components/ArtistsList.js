// Artists List Component

var ArtistsList = React.createClass({

  getInitialState: function() {
    return {
      artists: this.props.artists
    }; 
  },

  render: function() {
    var _setSelectedArtist = this.props.setSelectedArtist;

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
      <div className="col-sm-3">
        <div className="artists-list">
          <ul className="artists-list-element">
            {artistElementsArray}
          </ul>
        </div>
      </div>
    );
  }

});
