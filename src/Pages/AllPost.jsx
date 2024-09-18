

/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import PostCard from '../Components/PostCard';
import appwriteService from "../AppWrite/config";
import Container from '../Components/Container/Container';

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            console.log(posts);
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    return (
        


        
            
  <div className="w-full py-8 bg-slate-800-gradient">
  <Container>
    {/* Falling stars */}
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {posts.map((post) => (
        <div key={post.$id} className="p-2">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  </Container>
</div>

        
    );
}

export default AllPosts;
