function City({ name, flag }) {
  return (
    <a href="#featured" className="city-link">
      <span className="flag">
        <img
          src={`https://flagcdn.com/w40/${flag}.png`}
          alt=""
        />
      </span>
      {name}
    </a>
  )
}

export default City