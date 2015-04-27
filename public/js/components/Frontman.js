// Frontman Main App Component

var Frontman = React.createClass({

  getInitialState: function() {
    return {
      artists: []
    };
  },

  componentWillUpdate: function() {

  },

  //
  //
  //
  createArtist: function(name) {
    var Artist = function(name) {
      this.name = name;
      this.id = undefined;
      this.data;
      this.calendar;
    }

    return Artist;
  },

  //
  // Create new Artist object from input form
  //
  handleArtistInput: function(name) {
    // Remove all spaces from the input string
    var filteredName = name.replace(/\s+/g, '');
    // Create a new Artist object from the filtered name string
    var newArtist = new Artist(filteredName);

    var artistDataPromise = newArtist.gatherArtistData();
    var calendarDataPromise = newArtist.gatherCalendar();

    var setArtistData = function(artist, data) {
      artist.data = data;
      artist.id = data["id"];
      console.log("Artist data gathered and set. ");
    };

    var setCalendarData = function(artist, data) {
      artist.calendar = data;
      console.log("Calendar data gathered and set. ");
    };

    var self = this;

    $.when(artistDataPromise, calendarDataPromise).done(function(artistPromise, calendarPromise) {
      var artistPromiseData = artistPromise[0];
      var calendarPromiseData = calendarPromise[0];

      var filteredArtistData = artistPromiseData["resultsPage"]["results"]["artist"][0];
      var filteredCalendarData = calendarPromiseData;

      setArtistData(newArtist, filteredArtistData);
      setCalendarData(newArtist, filteredCalendarData);

      self.addArtist(newArtist);
    });

    // TESTING
    console.log(newArtist);
  },

  //
  // Get Artist's data from AJAX request methods to Songkick API
  //
  gatherAllArtistData: function(artist) {
    artist.gatherArtistData();
    artist.gatherCalendar();
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
  // TESTING: console.log current state
  //
  logState: function() {
    console.log(this.state.artists);
  },

  render: function() {
    return (
      <div className="col-sm-12">
        <Header
          handleArtistInput={this.handleArtistInput}
          logState={this.logState}
        />
        <Body
          artists={this.state.artists}
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