// Frontman Main App Component

var Frontman = React.createClass({

  getInitialState: function() {
    return {
      artists: [],
      selectedArtist: undefined
    };
  },

  componentWillUpdate: function() {

  },

  //
  // Create new Artist object from input form
  //
  createArtist: function(name) {

    var self = this;

    // Remove all spaces from the input string
    var filteredName = name.replace(/\s+/g, '');

    // Create a new Artist object from the filtered name string
    var newArtist = new Artist(filteredName);

    var setArtistData = function(artist, data) {
      artist.data = data;
      artist.id = data["id"];
      artist.name = data["displayName"];
      console.log("Artist data gathered and set. ");
    };

    var setCalendarData = function(artist, data) {
      artist.calendar = data;
      console.log("Calendar data gathered and set. ");
    };

    // Gather the artist data promise object
    var artistDataPromise = newArtist.gatherArtistData();

    // Set the respective data when the AJAX requests are done
    $.when(artistDataPromise).done(function(artistData) {
      // Filter out the data we want from the JSON response
      var filteredArtistData = artistData["resultsPage"]["results"]["artist"][0];

      // Set the Artist data so that the id can be used to request the calendar API
      setArtistData(newArtist, filteredArtistData);

      // Get the calendar promise object
      var calendarDataPromise = newArtist.gatherCalendar();

      // Gather the calendar data from 
      $.when(calendarDataPromise).done(function(calendarData) {
       // var calendarPromiseData = calendarPromise[0];
        var filteredCalendarData = calendarData["resultsPage"]["results"];
        console.log(calendarData);

        setCalendarData(newArtist, filteredCalendarData);

        // Set this.state.artists to include the new Artist
        self.addArtist(newArtist);
      });

    });

    // TESTING
    console.log(newArtist);
  },

  //
  // Add Artist to Frontman component state
  //
  addArtist: function(artist) {
    this.setState({
      artists: this.state.artists.concat(artist)
    });
  },

  //
  //
  //
  removeArtist: function(artist) {

  },

  //
  // Set this.state.selectedArtist's value to the argued Artist
  //
  setSelectedArtist: function(artist) {
    this.setState({
      selectedArtist: artist
    });
  },

  //
  // TESTING: console.log current state
  //
  logState: function() {
    console.log("Artists: ", this.state.artists);
    console.log("Selected Artist: ", this.state.selectedArtist);
  },

  render: function() {
    return (
      <div className="col-sm-12">
        <Header
          createArtist={this.createArtist}
          logState={this.logState}
        />
        <Body
          artists={this.state.artists}
          selectedArtist={this.state.selectedArtist}
          setSelectedArtist={this.setSelectedArtist}
        />
      </div>
    );
  }
});

React.render(<Frontman
  artist={Artist}
  artistData={ARTISTS}
  />, 
  document.getElementById('app-wrapper')
);