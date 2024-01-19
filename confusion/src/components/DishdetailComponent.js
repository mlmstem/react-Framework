import React, { Component } from "react";
import { Media } from "reactstrap";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <div>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderComments(dish) {
    if (dish == null) {
      return <div></div>;
    }
  
    const comments = dish.comments.map((comment) => {
      if (comment != null) {
        return (
          <div key={comment.id} className="comment">
            <p>{comment.comment}</p>
            <p>
              -- {comment.author},{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(comment.date))}
            </p>
          </div>
        );
      } else {
        return <div key={comment.id}></div>;
      }
    });
  
    return (
      <div>
        <h4 className>Comments</h4>
        <div>{comments}</div>
      </div>
    );
  }

  render() {
    return (
        <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.dishes)}</div>
        <div className="col-12 col-md-5 m-1"> {this.renderComments(this.props.dishes)}</div>
        </div>
    );
  }
}

export default Dishdetail;
