// Artist Display Component

var ArtistDisplay = React.createClass({
  
  getInitialState: function() {
    return {
      selectedArtist: this.props.selectedArtist 
    };
  },

  render: function() {
    return (
      <div className="col-sm-6">
        <div className="artist-display">
          <h2> {this.state.selectedArtist} </h2>
        </div>
      </div>
    ); 
  }

});
