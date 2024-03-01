import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((movie) => movie._id === movieId);

  return (
    <>
      <Row className='justify-content-center'>
        <Col md={5}>
          <img src={movie.ImagePath} alt='movie-poster' className='w-100' />
        </Col>
        <Col md={3}>
          <div className='my-1'>
            <span className='h1'>{movie.Title}</span>
          </div>
          <div className='my-1'>
            <span className='h5'>Description: </span>
            <span>{movie.Description}</span>
          </div>
          <div className='my-1'>
            <span className='h5'>Genre: </span>
            <span>{movie.Genre.Name}</span>
          </div>
          <div className='my-1'>
            <span className='h5'>Director: </span>
            <span>{movie.Director.Name}</span>
          </div>
          <Link to={`/`}>
            <Button className='back-button' style={{ cursor: 'pointer' }}>
              Back
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

MovieView.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string,
    }),
  }).isRequired,
};
