import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({post}) => {
  return (
	  <div className="card">
		<Link className="linkCard" to={`/post/${post.id}`}>
		  <div className="body">
			  <img src={post.image} width="300px" height="350" className="card__image" alt={post.title}/>
			  <h2 className="card__title">{post.title}</h2>
              <p className="card__description">{post.description}</p>
		  </div>
		  </Link>
	  </div>

  )
}

export default Card

