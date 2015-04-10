// Frontman Main App Component

var Frontman = React.createClass({

  getInitialState: function() {
    return {
      artists: []
    };
  },

  //
  // Create new Artist object from input form
  //
  handleArtistInput: function(name) {
    // Remove all spaces from the input string
    var filteredName = name.replace(/\s+/g, '');
    // Create a new Artist object from the name string
    var newArtist = new Artist(filteredName);

    this.gatherAllArtistData(newArtist);

    this.addArtist(newArtist);

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
  // Add Artist to user's Artist db
  //
  addArtist: function(artist) {
    var oldArtistsArray = this.state.artists;
    oldArtistsArray.push(artist);
    var newArtistsArray = oldArtistsArray;

    // Add Artist to artists array in state
    this.setState({
      artists: newArtistsArray
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

React.render(<Frontman artist={Artist} artistData={ARTISTS} />, document.getElementById('app-wrapper'));