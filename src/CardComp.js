import Card from 'react-bootstrap/Card';
import PicCarousel from './PicCarousel';

function CardComp(place) {
  return (
    <Card style={{ width: '30vh', height: '40vh' }}>
      <PicCarousel place={place.place}/>
    </Card>
  );
}

export default CardComp;