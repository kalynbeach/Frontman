// Artists List Component

var ArtistsList = React.createClass({

  getInitialState: function() {
    return {
      artists: this.props.artists,
      artistElementsArray: []
    }; 
  },

  componentWillUpdate: function() {
    this.createListElements();
  },

  //
  // TODO: Make this work! Needs to update when a new artist is created/added
  //
  createListElements: function() {
    var _artistElementsArray = this.props.artists.map(function(artist) {
      return (<ArtistButton key={artist.id} name={artist.data.displayName} /> );
    });

    this.setState({
      artistElementsArray: _artistElementsArray
    });

  },

  render: function() {
    // TODO: This needs to render after the Artist object has been created
    return (
      <div className="col-sm-3">
        <div className="artists-list">
          <ul className="artists-list-element">
            {this.state.artistElementsArray}
          </ul>
        </div>
      </div>
    );
  }

});
