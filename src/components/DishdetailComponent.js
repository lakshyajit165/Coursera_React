import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props){
    super(props);

    this.state= {
      comments: null
    };
  }

  renderDish(dish) {
    if (dish != null) {
      return(
        <Card>
          <CardImg width="100" src={dish.image} alt={dish.name}/>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
    )}else{
      return
        <div></div>
    };
  }

  renderComments(comments) {
    if (comments != null) {
      return(
        <div className="mt-1">
          <h4>Comments</h4>
          <ul className="unstyled-list">
            {comments.map((comment) => (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {comment.date}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return(
        <div></div>
      )
    }
  }


  render() {

    if(this.props.dish){
      return(
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
      } else {

        return(<div></div>);
      }
  }
}

export default DishDetail;