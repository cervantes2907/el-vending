//import { Table } from 'antd'
import React from 'react'
import Card from '../components/Card'
import PiePagina from '../components/PiePagina'
import { posts } from '../data'
const ProductosPage = () => {
  return (
    <>
      <div className='wrapper'>
        {posts.map(post =>(
          <Card key={post.id} post={post}/>
        ))}
      </div>
      <PiePagina />
    </>
  )
}

export default ProductosPage
