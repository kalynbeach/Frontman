// Artist Form Component

/* TODO:
 *  - Need to implement input validation
 *    - Name input needs to be a string
 *    - Ideally name needs to be a valid name of an artist in the SongKick DB
*/

var ArtistForm = React.createClass({
  
  getInitialState: function() {
    return {
      name: undefined
    };
  },

  //
  // Set this.state.name to the current input text
  //
  handleChange: function(event) {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  },

  //
  // Submit input text to the handleArtistInput method on the Frontman component
  //
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.handleArtistInput(this.state.name);
    this.setState({
      name: ''
    });
  },

  render: function() {
    return (
      <form className="form-inline" id="artist-form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input 
            type="text"
            className="form-control"
            id="artist-form-input"
            placeholder="Enter an artist or band to track..."
            value={this.state.name}
            onChange={this.handleChange}
            />
        </div>
        <button type="submit" classname="btn btn-default">Add</button>
      </form>
    );
  }

});
