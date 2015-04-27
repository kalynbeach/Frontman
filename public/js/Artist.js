/** 
 *  Artist Object
 **
*/

var Artist = function(name) {
  this.name = name;
  this.id = undefined;
  this.data;
  this.calendar;
};

//
// Return a promise object of the AJAX call to the argued URL
// Used as a general purpose method to retrieve data from an API URL
//
Artist.prototype.createPromise = function(url) {
  // URL of the SongKick API that will be accessed
  var _url = url;

  // Return a promise object of the artist data ajax call
  var dataPromise = function() {
    return (
      $.ajax({
        method: "GET",
        url: _url,
        dataType: "jsonp"
      })
    );
  };

  return dataPromise();
};

//
// Gather the Artist's data object and set it to this.data
//
Artist.prototype.gatherArtistData = function() {
  // Use SongKick's Artist Search endpoint
  var url = "http://api.songkick.com/api/3.0/search/artists.json?query=" + this.name +  "&apikey=GkwCU62WH1YWh7Mr&jsoncallback=?"; 

  // Create the AJAX request promise object
  var promise = this.createPromise(url);

  return promise;

  /*
  // Set the Artist's data to the argued data
  var setArtistData = function(data) {
    this.data = data;
    this.id = data["id"];
    console.log("Artist data gathered and set. ");
  }.bind(this);

  // Get the artist data JSON object from the promise object
  function getArtistDataFromPromise() {
    promise.done(function(data) {
      var artistData = data["resultsPage"]["results"]["artist"][0];
      // Set the artist data
      setArtistData(artistData);
    });
  };

  // Run method operations
  getArtistDataFromPromise();
  */
};

//
// Gather Artist's upcoming calendar as an array of event objects
//
Artist.prototype.gatherCalendar = function() {
  var url = "http://api.songkick.com/api/3.0/artists/" + this.id + "/calendar.json?apikey=GkwCU62WH1YWh7Mr&jsoncallback=?";

  var promise = this.createPromise(url);

  return promise;

  /*
  // Set the Artist's calendar data to the argued data
  var setCalendarData = function(data) {
    this.calendar = data;
    console.log("Calendar data gathered and set. ");
  }.bind(this);

  // Get the artist calendar data JSON object from the promise object
  function getCalendarDataFromPromise() {
    promise.done(function(data) {
      var calendarData = data["resultsPage"]["results"]["event"];
      setCalendarData(calendarData);
    });
  };

  // Run method operations
  getCalendarDataFromPromise();
  */
};

//
// Log an Artist's calendar data
//
Artist.prototype.logCalendar = function() {
  if (this.calendar === undefined) {
    console.log("Calendar for this artist has not yet been gathered. ");
    return;
  }
  
  var calendar = this.calendar;
  var filteredCalendar = [];

  // Filter through calendar array of event objects
  for (var i = 0; i < calendar.length; i++) {
    var eventName = calendar[i]["displayName"],
        eventDate = calendar[i]["start"]["date"],
        eventLocation = calendar[i]["location"]["city"],
        eventVenue = calendar[i]["venue"]["displayName"];

    var filtedEventObject = {
      name: eventName,
      date: eventDate,
      location: eventLocation,
      venue: eventVenue
    };

    filteredCalendar.push(filtedEventObject);
  }

  // Loop through each event and log information
  for (var i = 0; i < filteredCalendar.length; i++) {
    console.log("====================");
    console.log("Event: " + filteredCalendar[i].name);
    console.log("Date: " + filteredCalendar[i].date);
    console.log("Location: " + filteredCalendar[i].location);
    console.log("Venue: " + filteredCalendar[i].venue);
  };
};

//
// TESTING
//

// var tame = new Artist("TameImpala");
// tame.gatherArtistData();
// tame.gatherCalendar();