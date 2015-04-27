// Frontman Header Component

var Header = React.createClass({

  render: function() {
    return (
      <div className="row">
        <div className="col-sm-4">
          <h1>Frontman</h1>
        </div>
        <div className="col-sm-3">
          <button type="button" onClick={this.props.logState}> Log State </button>
        </div>
        <div className="col-sm-5">
          <ArtistForm
            createArtist={this.props.createArtist}
          />
        </div>
      </div>
    );
  }

});
