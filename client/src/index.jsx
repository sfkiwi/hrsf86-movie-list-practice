import React from 'react';
import ReactDOM  from 'react-dom';
import MoviesList from './components/MoviesList.jsx';
import AddMovie from './components/AddMovie.jsx';
import SearchMovie from './components/Search.jsx';

var movies = [
  { 
    id: 1,
    title: 'Mean Girls', 
      details: {
        year: 2004,
        runtime: 182,
        metascore: 66,
        imdb: 'http://www.imdb.com/title/tt0377092/?ref_=nv_sr_1',
        thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MDQ4MjI1OV5BMl5BanBnXkFtZTcwNzcwODAzMw@@._V1_UY268_CR3,0,182,268_AL_.jpg'
    }
  },
  {
    id: 2,
    title: 'Hackers',
    details: {
      year: 1995,
      runtime: 107,
      metascore: 46,
      imdb: 'http://www.imdb.com/title/tt0113243/?ref_=nv_sr_1',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODg0NjQ5ODQ3OF5BMl5BanBnXkFtZTcwNjU4MjkzNA@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  },
  {
    id: 3,
    title: 'The Grey',
    details: {
      year: 2011,
      runtime: 117,
      metascore: 64,
      imdb: 'http://www.imdb.com/title/tt1601913/?ref_=nv_sr_1',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDY4MTQwMzc1MV5BMl5BanBnXkFtZTcwNzcwNTM5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  },
  {
    id: 4,
    title: 'Sunshine',
    details: {
      year: 2007,
      runtime: 107,
      metascore: 64,
      imdb: 'http://www.imdb.com/title/tt0448134/?ref_=nv_sr_3',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5Nzg2OTk2NF5BMl5BanBnXkFtZTYwNTc1ODM3._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  },
  {
    id: 5,
    title: 'Ex Machina',
    details: {
      year: 2014,
      runtime: 108,
      metascore: 78,
      imdb: 'http://www.imdb.com/title/tt0470752/?ref_=nv_sr_1',
      thumbnail: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  }
];


class MovieList extends React.Component {
  constructor() {
    super();

    this.state = {
      list: movies,
      filteredList: movies
    }

    this.addMovie = this.addMovie.bind(this);
    this.search = this.search.bind(this);
    this.searchResults = this.searchResults.bind(this);
    this.clearSearchResults = this.clearSearchResults.bind(this);

  }

  addMovie(title) {
    let list = this.state.list;

    list.push({
      id: list[list.length-1].id + 1,
      title: title,
      details: {
        year: 2017,
        runtime: 100,
        metascore: 50,
        imdb: 'http://www.imdb.com',
        thumbnail: 'http://www.citypages.com/img/movie-placeholder.gif'
      }
    });

    this.setState({
      list: list
    });
  }

  searchResults(results) {
    this.setState({ filteredList: results });      
  }

  clearSearchResults() {
    this.setState({filteredList: this.state.list});
  }

  search(title) {
    return new Promise((resolve, reject) => {
      let filteredList = this.state.list.filter(movie =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );

      resolve(filteredList);
    })
  }

  render() {
    return (
      <div className="container" >
        <div id="header" className="row">
          <h2>MovieList</h2>
        </div>
        <div id="control" className="row">
          <AddMovie addMovie={this.addMovie} />
          <SearchMovie search={this.search} searchResults={this.searchResults} clearSearch={this.clearSearchResults} />
        </div>
        <div id="list" className="row">
          <div className="col-md">
            <MoviesList className="movies-list" list={this.state.filteredList} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
