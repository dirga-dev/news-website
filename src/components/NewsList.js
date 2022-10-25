import { Row } from "react-bootstrap";
import { Card, Button, Col} from "react-bootstrap";
import '../App.css';

const NewsList = (props) => {
  
  return(
    <div>
      <Row md="auto" className="g-4 justify-content-md-start">
      {props.articles.map((article, index) =>(
        <Col>
          <Card style={{ width: '25rem', height: '30rem'}}>
            <Card.Img variant="top" src={article.urlToImage} alt="News Image" style={{maxHeight: '13rem'}}/>
            <Card.Body>
              <Card.Title>
                  {article.title}
              </Card.Title>
              <Card.Text>{article.description}</Card.Text>
              <div style={{marginLeft: '53%'}}>
                <Button variant="primary">News Page</Button>{' '}
                <Button variant="info">Save</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
    </div>
  )
}

export default NewsList;