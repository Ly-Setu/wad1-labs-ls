"use strict";
import logger from "../utils/logger.js";
import playlistStore from "../models/playlist-store.js";
import playlist from "./playlist.js";

const stats = {
  createView(request, response) {
    logger.info("Stats page loading!");
    // app statistics calculations
    const playlists = playlistStore.getAllPlaylists();

    let numPlaylists = playlists.length;
    
    let numSongs = playlists.reduce((total, playlist) => total + playlist.songs.length, 0);
	
	let average = numPlaylists > 0 ? (numSongs / numPlaylists).toFixed(2) : 0;

    let totalRating = playlists.reduce((total, playlist) => total + parseInt(playlist.rating), 0);

    let mapped = playlists.map(playlist => playlist.rating);

    let maxRating = Math.max(...playlists.map(playlist => playlist.rating));

    let maxRated = playlists.filter(playlist => playlist.rating === maxRating);

    let favTitles = maxRated.map(item => item.title);
      
    let avgRating = numPlaylists > 0 ? totalRating/numPlaylists : 0;

    let maxPlaylists = Math.max(...playlists.map(playlist => playlist.songs.length));

    let maxPlaylist = playlists.filter(playlist => playlist.songs.length === maxPlaylists);

    let largestPlaylist = maxPlaylist.map(item => item.title);

    const statistics = {
      displayNumPlaylists: numPlaylists,
      displayNumSongs: numSongs,
	  displayAverage: average,
      displayAvgRating: avgRating.toFixed(2),
	  highest: maxRating,
      displayFav: favTitles,
      displayLargestPlaylist: largestPlaylist,
      largest : maxPlaylists
    }

    const viewData = {
      title: "Playlist App Statistics",
      stats: statistics
    };
  
    response.render("stats", viewData);
  },


};

export default stats;
