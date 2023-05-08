import './index.css'

const CryptocurrencyItem = props => {
  const {coinDetails} = props

  const {currencyLogo, currencyName, usdValue, euroValue} = coinDetails

  return (
    <li className="list-item">
      <div className="coin-cell">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-text">{currencyName}</p>
      </div>
      <div className="coin-cell">
        <p className="currency-text">{usdValue}</p>
        <p className="currency-text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
