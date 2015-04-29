// Artist Display Event (show) Component

var Event = React.createClass({

  render: function() {
    return (
      <li className="artist-display-event">
        <div className="artist-display-event-title">
          <h3>{this.props.title}</h3>
          {this.props.location}
        </div>
      </li>
    );
  }

});