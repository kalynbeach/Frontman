// Artist Display Component

var ArtistDisplay = React.createClass({
  
  getInitialState: function() {
    return {

    };
  },

  //
  // TODO: Clean up this render method so that nothing is repeated
  //
  render: function() {

    var selectedArtist = this.props.selectedArtist; 

    // Place holder view if there is no selected Artist
    if (selectedArtist === undefined) {
      return (
        <div className="col-sm-6 body-col">
          <div className="body-section" id="artist-display">
            <h2 id="artist-display-name"> Select an Artist </h2>
          </div>
        </div>
      );
    } else {

      var eventListElements = selectedArtist.calendar.map(function(event) {
        return (
          <Event
            title={event.displayName}
            location={event.location}

          />
        );
      });

      return (
        <div className="col-sm-6 body-col">
          <div className="body-section" id="artist-display">
            <h2 id="artist-display-name"> {selectedArtist.data.displayName} </h2>
            <div id="artist-display-calendar-list">
              <ul className="artist-display-calendar-list-element">
                {eventListElements}
              </ul>
            </div>
          </div>
        </div>
      );  
    }
  }

});
