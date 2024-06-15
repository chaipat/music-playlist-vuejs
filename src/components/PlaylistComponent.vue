<template>
  <div class="playlist">
    <h1>{{ playlistname }}</h1>
    <div v-for="song in songs" :key="song.id" class="song" >

        <div class="song-info" v-if="song.track.preview_url != null">
          <img :src=song.track.album.images[0].url :alt=song.track.album.name width="50" height="50">
          <h2>{{ song.track.album.name }}</h2>
          <p>{{ song.track.artists.name }}</p>
        </div>
        <button @click="playSong(song.track)" v-if="song.track.preview_url != null">
          <font-awesome-icon :icon="isPaused ? 'play' : 'pause'" />
        </button>

    </div>
  </div>
</template>

<script>
// import { ref } from 'vue';
import axios from 'axios'; // Import Axios
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'PlaylistComponent',
  data() {
    return {
      playlistname: 'My Playlist',
      songs: [],
      icon:'play',
      currentSong: null,
      audioElement: new Audio(),
      isPaused: 'play'
    };
  },
  mounted() {
    // Fetch data when the component is mounted
    this.fetchSongs();
  },
  methods: {
    fetchSongs() {
      // Example: Fetching data from an API
      axios.get('http://localhost:8080/api/playlist/37i9dQZF1DWW1S2VXZ4bIj')
        .then(response => {
          // Handle successful response
          console.log(response); // Log the fetched data

          this.playlistname = response.data.name;
          this.songs = response.data.tracks.items.slice(0, 10); // Update songs array with fetched data
        })
        .catch(error => {
          // Handle error
          console.error('Error fetching data:', error);
        });
    },
    playSong(song) {

      console.error('song:', song.id);

      //https://api.spotify.com/v1/albums/31dukmU9drXyFzMiyK4eq4
      if (this.currentSong && this.currentSong.id === song.id) {
        // Toggle play/pause for the current song
        if (this.audioElement.paused) {

          this.audioElement.play();
          this.icon = 'play';
          this.isPaused = 'play';
          console.error('song:play');
        } else {

          this.audioElement.pause();
          this.icon = 'pause';
          this.isPaused = 'pause';
          console.error('song:pause');
        }

      } else {
        // Play a new song
        if(song.preview_url){
          this.audioElement.src = song.preview_url;
          this.audioElement.play();
          this.currentSong = song;      
          this.icon = 'play';
          this.isPaused = 'play';
        }else{
          alert('Can not play.');
        }

      }
    },
    isPlaying(song) {
      return this.currentSong && this.currentSong.id === song.id && !this.audioElement.paused;
    },
    togglePlayback() {
      this.isPaused.value = !this.isPaused.value;
      // Add logic to play or pause your audio here
    }
  },
  // mounted() {
  //   // Handle when audio ends to stop playback
  //   this.audioElement.addEventListener('ended', () => {
  //     this.currentSong = null;
  //   });
  // },
  // beforeUnmount() {
  //   // Clean up event listener when component is unmounted
  //   this.audioElement.removeEventListener('ended');
  // },
};
</script>


<style scoped>
body{
  margin: 0;
  background-color: #000;
}
#app{
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000
}
.playlist {
  font-family: Arial, sans-serif;
  background-color: #121212;
  color: white;
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  margin: auto;
  text-align: center;
}

.song {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #333;
}

.song-info {
  text-align: left;
}

button {
  background-color: #1DB954;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1ed760;
}
</style>
