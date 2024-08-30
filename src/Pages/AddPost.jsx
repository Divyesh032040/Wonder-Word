// eslint-disable-next-line no-unused-vars
import React from 'react'
import  {Container} from '../Components/Index'
import PostForm from '../Components/post-form/PostForm'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost