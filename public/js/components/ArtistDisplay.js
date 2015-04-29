// Artist Display Component

var ArtistDisplay = React.createClass({
  
  getInitialState: function() {
    return {

    };
  },

  componentWillReceiveProps: function() {
  
  },

  //
  // TODO: Clean up this render method so that nothing is repeated
  //
  render: function() {
    // Place holder view if there is no selected Artist
    if (this.props.selectedArtist === undefined) {
      return (
        <div className="col-sm-6">
          <div className="body-section" id="artist-display">
            <h2 id="artist-display-name"> Select an Artist </h2>
          </div>
        </div>
      );
    } else {

      var selectedArtist = this.props.selectedArtist;

      return (
        <div className="col-sm-6">
          <div className="body-section" id="artist-display">
            <h2 id="artist-display-name"> {selectedArtist.data.displayName} </h2>
          </div>
        </div>
      );  
    }
  }

});
