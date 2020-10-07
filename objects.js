var playlist = {Prince: 'Kiss'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {

  return playlist.assign({}, playlist, { [playlist]: songTitle})
}
