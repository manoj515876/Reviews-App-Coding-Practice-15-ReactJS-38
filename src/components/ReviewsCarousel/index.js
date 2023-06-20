import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  onLeftChange = () => {
    const {index} = this.state
    if (index <= 0) {
      this.setState(preState => ({index: preState.index}))
    } else {
      this.setState(preState => ({index: preState.index - 1}))
    }
  }

  onRightChange = () => {
    const {index} = this.state
    if (index >= 3) {
      this.setState(preState => ({index: preState.index}))
    } else {
      this.setState(preState => ({index: preState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="image" />
        <div className="card">
          <button
            className="left"
            type="button"
            data-testid="leftArrow"
            onClick={this.onLeftChange}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="name">{username}</p>
          <button
            className="right"
            type="button"
            data-testid="rightArrow"
            onClick={this.onRightChange}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="para">{companyName}</p>
        <p className="para">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
