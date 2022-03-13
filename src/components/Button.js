function Button({ color, text }) {
  return (
    <button className="btn">Add</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button