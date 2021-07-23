// Write your code here
import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imgUrl, name} = destinationDetails
    return (
      <li className="list-item">
        <img src={imgUrl} className="edited-image" alt={name} />
        <p className="para">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
