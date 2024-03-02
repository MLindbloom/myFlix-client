import PropTypes from 'prop-types';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './movie-card.scss';

export const MovieCard = ({ movie, token, setUser, user }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user.FavoriteMovies && user.FavoriteMovies.includes(movie._id)) {
      setIsFavorite(true);
    }
  }, [user]);

  const addFavoriteMovie = () => {
    fetch(
      `https://mll-movie-app-2b0ca377526b.herokuapp.com/users/${user.Username}/movies/${movie._id}`,
      { method: 'POST', headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Failed');
        }
      })
      .then((user) => {
        if (user) {
          alert('Added to Favorites');
          localStorage.setItem('user', JSON.stringify(user));
          setUser(user);
          setIsFavorite(true);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const removeFavoriteMovie = () => {
    fetch(
      `https://mll-movie-app-2b0ca377526b.herokuapp.com/users/${user.Username}/movies/${movie._id}`,
      { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Failed');
        }
      })
      .then((updatedUser) => {
        console.log('Updated user:', updatedUser);
        if (updatedUser) {
          alert('Deleted from Favorites');
          localStorage.setItem('user', JSON.stringify(updatedUser));
          setUser(updatedUser);
          setIsFavorite(false);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Card className='h-100 movieCard p-2'>
      <Card.Img className='my-3' src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Director.Name}</Card.Text>
      </Card.Body>
      <Card.Footer className='card-footer'>
        <Row>
          <Col>
            <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
              <Button variant='link' className='open-btn'>
                See More
              </Button>
            </Link>
          </Col>
          <Col>
            <FaHeart
              className='fav-btn'
              onClick={isFavorite ? removeFavoriteMovie : addFavoriteMovie}
              style={{ color: isFavorite ? 'red' : 'black', cursor: 'pointer' }}
            />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
