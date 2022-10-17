import './SearchItem.css'

const SearchItem = props => {
  const {searchDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = searchDetails

  return (
    <div>
      <li className="listStructure">
        <p className="paragraph">{timeAccessed}</p>
        <img src={logoUrl} className="logoSize" alt="domain logo" />
        <p className="paragraph">{title}</p>
        <p className="paragraph">{domainUrl}</p>

        <button type="button" key={searchDetails.id}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="deleteImage"
            alt="delete"
          />
        </button>
      </li>
    </div>
  )
}

export default SearchItem
