import {Component} from 'react'
import './index.css'

const leftArrowBtn =
  'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const rightArrowBtn =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onClickRightArrowBtn = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    const indexNum = reviewsList.length
    console.log(index)
    console.log(indexNum - 1)
    if (index < indexNum - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="user-profile-img" />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrowBtn = () => {
    const {index} = this.state
    console.log(index)
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[index]

    return (
      <div className="app-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="reviewsCarousel">
          <button
            className="button left-arrow"
            type="button"
            // testId="leftArrow"
            onClick={this.onClickLeftArrowBtn}
          >
            <img src={leftArrowBtn} alt="left arrow" className="arrow-size" />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            className="right-arrow button"
            type="button"
            // testId="rightArrow"
            onClick={this.onClickRightArrowBtn}
          >
            <img src={rightArrowBtn} alt="right arrow" className="arrow-size" />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
