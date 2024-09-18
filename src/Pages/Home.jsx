/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from 'react';
import appwriteService from "../AppWrite/config";
import PostCard from '../Components/PostCard';
import Container from '../Components/Container/Container';


function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])


    if (posts.length === 0) {
        return (
            
        <div className=" flex-grow w-full py-8 h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-gray-300">
            <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <Container>
        <div className="flex flex-wrap justify-center">
            <div className="p-4 w-full text-center">
                <h1 className="text-4xl font-bold mb-4 tracking-wider text-gray-200">
                    Unlock Knowledge: Sign In to Access Insightful Blogs
                </h1>
                <p className="text-lg mb-8 tracking-wide text-gray-400">
                    Join Us for Fresh Perspectives and In-Depth Analysis
                </p>
                <div className="w-1/3 h-1 bg-gray-600 mb-8 mx-auto"></div>
                <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="bg-gray-600 bg-opacity-10 h-24 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold tracking-wide text-gray-200">Innovation</span>
                    </div>
                    <div className="bg-gray-600 bg-opacity-20 h-24 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold tracking-wide text-gray-200">Technology</span>
                    </div>
                    <div className="bg-gray-600 bg-opacity-10 h-24 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold tracking-wide text-gray-200">Creativity</span>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="bg-gray-600 bg-opacity-20 h-24 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold tracking-wide text-gray-200">Learning</span>
                    </div>
                    <div className="bg-gray-600 bg-opacity-10 h-24 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold tracking-wide text-gray-200">Community</span>
                    </div>
                    <div className="bg-gray-600 bg-opacity-20 h-24 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold tracking-wide text-gray-200">Growth</span>
                    </div>
                </div>
            </div>
        </div>
        
        {/* New Section */}
        <div className="mt-12 text-center">
    <h2 className="text-3xl font-bold mb-6 text-gray-200">Why Join Us?</h2>
    <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md max-w-xs">
            <p className="text-base text-gray-300 mb-2">"This platform has transformed how I access and share knowledge."</p>
            <span className="block text-sm text-gray-500">- Happy Member</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md max-w-xs hidden sm:block">
            <p className="text-base text-gray-300 mb-2">"A vibrant community that fosters creativity and growth."</p>
            <span className="block text-sm text-gray-500">- Enthusiastic User</span>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md max-w-xs hidden sm:block">
            <p className="text-base text-gray-300 mb-2">"Access to the latest in technology and innovation."</p>
            <span className="block text-sm text-gray-500">- Tech Enthusiast</span>
        </div>
    </div>
</div>


    </Container>
        </div>


);

}
    return (
        <div className='flex-grow bg-[#0f172a] w-full py-8'>
              <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home;

