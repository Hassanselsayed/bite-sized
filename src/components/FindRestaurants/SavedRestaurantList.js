import React, { Component } from 'react';
import SavedRestaurantCard from './SavedRestaurantCard'

class SavedRestaurantList extends Component {
  constructor(props) {
    super()
    this.state = {
      // storing the saved restaurant object
      savedRestaurant: props.savedRestaurants,
    }
  }
  
  removeRestaurantFromList = (restaurantObj) => {

    const copyOfSavedRestaurant = [...this.state.savedRestaurant];
    const filteredArray = copyOfSavedRestaurant.filter((item) => {
      if (restaurantObj.name !== item.name) {
        return item
      } else {
        return null
      }
    })
    this.setState({
      savedRestaurant: filteredArray
    }, () => {
        this.props.removeRestaurantFromList(this.state.savedRestaurant);
    })
    
  }

  render() {
    return (
      <div>
        <SavedRestaurantCard restaurants={this.state.savedRestaurant} removeRestaurantFromList={this.removeRestaurantFromList}/>
      </div>
    )
  }
}

export default SavedRestaurantList;