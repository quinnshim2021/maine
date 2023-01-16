import Card from 'react-bootstrap/Card';
import PicCarousel from './PicCarousel';

function CardComp() {
  return (
    <Card style={{ width: '30vh', height: '40vh' }}>
      <PicCarousel />
    </Card>
  );
}

export default CardComp;