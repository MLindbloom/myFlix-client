import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import './index.scss';

//IMPORT STATEMENT TO INDICATE THAT YOU NEED TO BUNDLE. `./index.scss`
import './index.scss';

//MAIN COMPONENT (WILL EVENTUALLY USE ALL THE OTHERS)
const MyFlixApplication = () => {
  return (
    <Container className=''>
      <MainView />
    </Container>
  );
};

//FINDS THE ROOT OF YOUR APP
const container = document.querySelector('#root');
const root = createRoot(container);

//TELLS REACT TO RENDER YOUR APP IN THE ROOT DOM ELEMENT
root.render(<MyFlixApplication />);
