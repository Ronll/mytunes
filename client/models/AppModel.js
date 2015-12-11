// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    this.get('songQueue').on('playSong', function(song) {
     this.set('currentSong', song);
    });

    params.library.on('songSelected', function(song) {
      // this.set('currentSong', song);
      this.get('songQueue').songPicked(song);
    }, this);

    params.library.on('next', function(song) {
      this.get('songQueue').remove(song);
      this.set('currentSong', this.get('songQueue')).at(0);

    }, this);
  }

});
