// Artists List Component

var ArtistsList = React.createClass({
  
  createListElements: function() {
    var _artists = this.props.artists;
    
  },

  render: function() {
    return (
      <div className="col-sm-3">
        <div className="artists-list">
          <ul className="artists-list-element">
        
          </ul>
        </div>
      </div>
    );
  }

});
