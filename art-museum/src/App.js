import harvardArt from './data/harvardArt.js';
import GalleryNavigation from './components/GalleryNavigation/index.js';
import GalleryView from './components/GalleryView/index.js';
import { Route, Switch, Redirect, useParams} from 'react-router-dom';



function App() {
  return (
    <div className='page-wrapper'>
    
    <Route path="/galleries/:galleryId" component={GalleryView} ></Route>
    
    <GalleryView  galleries={harvardArt.records}/>
    <GalleryNavigation galleries={harvardArt.records}/>
    </div>
    );
  }


export default App;
