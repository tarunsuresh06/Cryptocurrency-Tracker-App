import './index.css'
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {coinsList} = this.props

    return (
      <ul className="currency-list-container">
        <li className="header-list-item">
          <div className="coin-cell">
            <p className="header-list-title">Coin Type</p>
          </div>
          <div className="coin-cell">
            <p className="header-list-text">USD</p>
            <p className="header-list-text">EURO</p>
          </div>
        </li>
        {coinsList.map(eachCoin => (
          <CryptocurrencyItem key={eachCoin.id} coinDetails={eachCoin} />
        ))}
      </ul>
    )
  }
}

export default CryptocurrenciesList
