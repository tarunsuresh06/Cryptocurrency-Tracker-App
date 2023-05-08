import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {coinsList: [], isLoading: true}

  componentDidMount() {
    this.getCoinsData()
  }

  getCoinsData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const filteredData = data.map(eachData => ({
      id: eachData.id,
      currencyName: eachData.currency_name,
      currencyLogo: eachData.currency_logo,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))

    this.setState({coinsList: filteredData, isLoading: false})
  }

  render() {
    const {isLoading, coinsList} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="app-heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="app-image"
              alt="cryptocurrency"
            />
            <CryptocurrenciesList coinsList={coinsList} />
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
