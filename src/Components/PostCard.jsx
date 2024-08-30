/* eslint-disable react/prop-types */

import appwriteService from '../AppWrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className='block'>
      <div className='w-full max-w-xs mx-auto bg-slate-400 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-105'>
        <div className='w-full h-64 mb-4'>
          <img 
            src={appwriteService.getFilePreview(featuredImage)} 
            alt={title} 
            className='w-full h-full object-cover'
          />
          
        </div>
        <div className='p-4'>
          <h2 className='text-2xl font-bold text-gray-800 bg-gray-200 p-4 rounded-md text-center'>
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
