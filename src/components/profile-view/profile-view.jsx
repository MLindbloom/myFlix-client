import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export const ProfileView = ({ user, token, movies, setUser }) => {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);

  const Navigate = useNavigate();

  const favoriteMoviesList = movies.filter((movie) =>
    user.FavoriteMovies.includes(movie._id)
  );

  const handleUpdate = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
    };

    fetch(
      `https://mll-movie-app-2b0ca377526b.herokuapp.com/users/${user.Username}`,
      {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then(async (response) => {
        console.log(response);
        if (response.ok) {
          const updatedUser = await response.json();
          localStorage.setItem('user', JSON.stringify(updatedUser));
          setUser(updatedUser);
          alert('Update was successful');
        } else {
          alert('Update failed');
        }
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  const handleDelete = () => {
    fetch(
      `https://mll-movie-app-2b0ca377526b.herokuapp.com/users/${user.Username}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((response) => {
      if (response.ok) {
        setUser(null);
        alert('User has been deleted');
        localStorage.clear();
        Navigate('/');
      } else {
        alert('Something went wrong.');
      }
    });
  };

  const handleDeleteClick = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account?'
    );
    if (confirmed) {
      handleDelete();
    }
  };

  return (
    <Container className='my-4'>
      <Row>
        <h4>Favorite Movies</h4>
        {favoriteMoviesList?.map((movie) => (
          <Col key={movie._id} className='my-3'>
            <MovieCard
              movie={movie}
              token={token}
              setUser={setUser}
              user={user}
            />
          </Col>
        ))}
        <Col md={6}>
          <Card>
            <Card.Body style={{ backgroundColor: 'white' }}>
              <Card.Title>Profile</Card.Title>
              <Card.Text>Username: {user.Username}</Card.Text>
              <Card.Text>Email: {user.Email}</Card.Text>
              <Card.Text>Birthday: {user.Birthday}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId='formUsername'>
              <Form.Label>Username: </Form.Label>
              <Form.Control
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                minLength='3'
                style={{ backgroundColor: 'white' }}
              />
            </Form.Group>

            <Form.Group controlId='formPassword'>
              <Form.Label>Password: </Form.Label>
              <Form.Control
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ backgroundColor: 'white' }}
              />
            </Form.Group>

            <Form.Group controlId='formEmail'>
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ backgroundColor: 'white' }}
              />
            </Form.Group>

            <Form.Group controlId='formBirthday'>
              <Form.Label>Birthday: </Form.Label>
              <Form.Control
                type='date'
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
                style={{ backgroundColor: 'white' }}
              />
            </Form.Group>
            <div style={{ marginTop: '16px' }}>
              <Button variant='primary' type='submit' onClick={handleUpdate}>
                Update User
              </Button>{' '}
              <Button onClick={handleDeleteClick}>Delete Account</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
