// Frontman Body Component

var Body = React.createClass({

  render: function() {
    return (
      <div className="row">
        <ArtistsList
         artists={this.props.artists}
        />
        <InfoDisplay />
        <Upcoming />
      </div>
    );
  }

});