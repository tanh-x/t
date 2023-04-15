import './LocationCard.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function LocationCardOne(props) {
    return (
      <Card style = {{ width: '18rem' }}>
        <Card.Body>
          <Card.Title > 
          <span className = "location-name">{props.name}</span>
           </Card.Title>
          <Card.Text>
            Number of loners: 
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }

  export default LocationCardOne;