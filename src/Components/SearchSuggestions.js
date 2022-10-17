import {Component} from 'react'

import './SearchSuggestions.css'

import SearchItem from './SearchItem'

class SearchSuggestions extends Component {
  state = {
    itemsList: '',
  }

  render() {
    const {initialHistoryList} = this.props

    const {itemsList} = this.state

    this.setState({itemsList: initialHistoryList})

    return (
      <div className="mainContainer">
        <div className="headerContainer">
          <img
            className="imagePosition"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />

          <div className="searchContainer">
            <div className="searchBg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <input
              className="inputStyle"
              type="search"
              placeholder="Search history"
            />
          </div>
        </div>
        <div className="bodyContiner">
          <ul>
            {itemsList.map(eachItem => (
              <SearchItem searchDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchSuggestions
