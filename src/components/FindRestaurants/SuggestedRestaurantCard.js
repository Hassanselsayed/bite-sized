import React, { Component } from 'react';

// get restaurant object from the search
// parse needed information (e.g. name, address) with props
// create a new, smaller restaurant object that can be save to the trip
// render the component
// when "add to list" button is clicked, pass the restaurant object from the state to the RestaurantList component, where it will be stored in an array


class SuggestedRestaurantCard extends Component {
    constructor(props) {
        super();
        this.state = {
            restaurant: {
                name: props.restaurant.name,
                cuisineType: props.restaurant.cuisines,
                address: props.restaurant.location.address,
                phoneNumber: props.restaurant.phone_numbers,
                avgCostForTwo: props.restaurant.average_cost_for_two,
                rating: props.restaurant.user_rating.aggregate_rating,
                featuredImg: props.restaurant.featured_image,
                // added: false
            },
            addedCheck: false
        }
    }



    addToList = () => {
        // map through restaurants lists to make sure that the restaurant wasn't added before

        this.props.addRestaurantToList(this.state.restaurant);
        this.setState({
            addedCheck: true
        })
        // this.setState({
        //     addedCheck: [...this.props.savedRestaurants].includes(this.state.restaurant, 0)
        // }, () => {
        //     if (this.state.addedCheck !== true) {
        //         this.setState({
        //             restaurant: {
        //                 ...this.state.restaurant,
        //                 // added: true,
        //             }
        //         }, () => {
        //             this.props.addRestaurantToList(this.state.restaurant);
        //         })
        //     } else {
        //         // console.log("Ya RAB");
        //         this.props.addRestaurantToList(this.state.restaurant);
        //     }
        // })

        // console.log("state: ", this.state.restaurant);
        // console.log("props: ", this.props.savedRestaurants);

    }

    render() {
        let elementToDisplay = <button className="addToList" onClick={this.addToList}><i className="fas fa-plus" aria-hidden></i> add to list</button>;


        // if (!this.state.addedCheck) {
        //     elementToDisplay = <button className="addToList" onClick={this.addToList}><i className="fas fa-plus" aria-hidden></i> add to list</button>
        // } else {
        //     elementToDisplay = <p><i className="addedToList" className="fas fa-check" aria-label="added to restaurant list"></i></p>
        // }

        const addedCheck = this.props.savedRestaurants.includes(this.state.restaurant);

        if (!addedCheck) {
            elementToDisplay = <button className="addToList" onClick={this.addToList}><i className="fas fa-plus" aria-hidden></i>Add to list</button>
        } else {
            elementToDisplay = <p className="addToList"><i className="fas fa-check" aria-label="added to restaurant list"></i></p>
        }

        // this.props.savedRestaurants.filter((item) => {
        //     if (item.name !== this.state.restaurant.name) {
        //         return elementToDisplay = <button className="addToList" onClick={this.addToList}><i className="fas fa-plus" aria-hidden></i>Add to list</button>
        //     } else {
        //         return elementToDisplay = <p className="addToList"><i className="fas fa-check" aria-label="added to restaurant list"></i></p>
        //     }
        // })

        return (
            <div className="card">
                {elementToDisplay}

                {this.state.restaurant.featuredImg !== ""
                    ? <img src={this.state.restaurant.featuredImg} alt={this.state.restaurant.name} />
                    : <img src={require('../../assets/placeholder.png')} alt="no image available" />}

                <p><span className="restaurantTitle restaurantName">{this.state.restaurant.name}</span> - {this.state.restaurant.cuisineType}</p>

                <address>
                    <p>{this.state.restaurant.address}</p>
                    <p>{this.state.restaurant.phoneNumber}</p>
                </address>

                <p>Average cost for two: ${this.state.restaurant.avgCostForTwo}</p>

                <p><span className="rating">{this.state.restaurant.rating}</span></p>
            </div>
        )
    }
}

export default SuggestedRestaurantCard
