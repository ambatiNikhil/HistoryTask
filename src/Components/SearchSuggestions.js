import {Component} from 'react'

import './SearchSuggestions.css'

import SearchItem from './SearchItem'

class SearchSuggestions extends Component {
  render() {
    const {initialHistoryList} = this.props

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
            {initialHistoryList.map(eachTask => (
              <SearchItem searchDetails={eachTask} key={eachTask.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchSuggestions
