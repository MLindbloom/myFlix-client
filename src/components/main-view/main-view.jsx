import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      Title: 'Interstellar',
      Description:
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
      Genre: {
        Name: 'Science Fiction',
        Description:
          'Science fiction, popularly shortened as sci-fi, is a genre of fiction that creatively depicts real or imaginary science and technology as part of its plot, setting, or theme.',
      },
      Director: {
        Name: 'Christopher Nolan',
        Bio: 'Christopher Nolan (born July 30, 1970, London, England) British film director and writer acclaimed for his noirish visual aesthetic and unconventional, often highly conceptual narratives. Nolan was raised by an American mother and a British father, and his family spent time in both Chicago and London. As a child, he attended Haileybury, a boarding school just outside London.',
        Birth: '1970',
      },
      ImagePath:
        'https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/A1JVqNMI7UL._SL1500_.jpg',
    },
    {
      id: 2,
      Title: 'The Holiday',
      Description:
        "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
      Genre: {
        Name: 'Romantic Comedy',
        Description:
          'Romantic comedy is a subgenre of comedy and romance fiction, focusing on lighthearted, humorous plot lines centered on romantic ideas, such as how true love is able to surmount most obstacles.',
      },
      Director: {
        Name: 'Nancy Meyers',
        Bio: 'Nancy Meyers (born December 8, 1949, Philadelphia, Pennsylvania, U.S.) American writer, director, and producer who was best known for her romantic comedies, several of which centre on middle-aged women. Meyers grew up in the Philadelphia area. After studying journalism at American University (B.A., 1970), she moved to Los Angeles to begin a career in the entertainment industry.',
        Birth: '1949',
      },
      ImagePath:
        'https://m.media-amazon.com/images/I/51BwEnFkE8L._AC_UF894,1000_QL80_.jpg',
    },
    {
      id: 3,
      Title: 'Avengers: Endgame',
      Description:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
      Genre: {
        Name: 'Action',
        Description:
          'Action film is a film genre in which the protagonist is thrust into a series of events that typically involve violence and physical feats. The genre tends to feature a mostly resourceful hero struggling against incredible odds, which include life-threatening situations, an indestructible villain, or a pursuit which usually concludes in victory for the hero.',
      },
      Director: {
        Name: 'Anthony Russo, Joe Russo',
        Bio: 'Anthony Russo and Joseph Russo, collectively known as the Russo brothers (ROO-soh), are American directors, producers, and screenwriters. Anthony Russo (born February 3, 1970) and Joseph Russo (born July 18, 1971) were born and raised in Cleveland, Ohio, the sons of Patricia Gallupoli and attorney and judge Basil Russo. Their parents were both of Italian descent. Their paternal and maternal families emigrated from Sicily and Abruzzo, respectively, and settling in Ohio. They attended Benedictine High School.[6] Joe graduated from the University of Iowa and majored in English and writing, while Anthony graduated from the University of Pennsylvania and majored in business before switching to English.',
        Birth: '1970',
      },
      ImagePath:
        'https://m.media-amazon.com/images/W/MEDIAX_849526-T1/images/I/61RhWaYBp7L._AC_SL1044_.jpg',
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
