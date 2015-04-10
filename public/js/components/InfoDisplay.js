// Information Display Component

var InfoDisplay = React.createClass({
  
  getInitialState: function() {
    return {
      currentArtist: undefined 
    };
  },

  render: function() {
    return (
      <div className="col-sm-6">
        <div className="info-display">
        </div>
      </div>
    );
  }

});
