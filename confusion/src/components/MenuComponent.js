import React, {Component} from "react";
import {Media} from 'reactstrap';
import { Card,CardImg, CardImgOverlay,CardText,CardBody,CardTitle } from "reactstrap";

import Dishdetail from "./DishdetailComponent";


class Menu extends Component {

    constructor (props) {
        super(props);

        this.state = {
            selectedDish : null
        };
        console.log('Menu Component constructor is invoked')
    }

    componentDidMount(){
        console.log("Menu componenet Mount constructor is invoked")
    }

    onDishSelect(dish){
        this.setState({selectedDish : dish});
    }




    // DishdetailComponent(dish){
    //     if (dish!=null){

    //         return(
    //             <div className="col-12 col-md-5 m-1">
    //             <Card>
    //                  <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                  <CardBody>
    //                  <CardTitle>{dish.name}</CardTitle>
    //                  <CardText>{dish.description}</CardText>

    //                  </CardBody>
    //             </Card>
    //             </div>
    //         )
    //     }
    //     else{
    //         return(
    //             <div>

    //             </div>
    //         )
    //     }
    // }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return(
            
            <div className="container">
                <div className="row">
                 {menu}
                </div>

            
                <Dishdetail dishes = {this.state.selectedDish} />
            
            </div>
        );
    }


}
export default Menu;