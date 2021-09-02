console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    albums: [],
    selectedValue: '',
    genres: []
  },
  methods: {
  },
  computed: {
    
  },

  created(){
    axios.get('https://flynn.boolean.careers/exercises/api/array/music').then((res)=> {

      this.albums = res.data.response;

      this.albums.forEach((element) => {
          if(!this.genres.includes(element.genre)) {
            this.genres.push(element.genre)
          }
      });
      this.albums.sort( function(element1, element2) {
        return parseInt(element1.year) - parseInt(element2.year);
      });
    });
  }
});
