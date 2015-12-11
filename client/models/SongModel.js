// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  songSelected: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('songSelected', this);
  },

  next: function () {
    this.trigger('next', this);
  }

});
