

import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../AppWrite/config";
import Button from "../Components/Button";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import Container from "../Components/Container/Container";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 bg-[#0f172a]">
            <Container>
                <div className="relative w-full max-w-3xl mx-auto border rounded-xl bg-white shadow-md overflow-hidden">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="w-full h-64 object-cover rounded-t-xl"
                    />

                    {isAuthor && (
                        <div className="absolute top-4 right-4 flex space-x-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="text-white hover:bg-green-600">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost} className="text-white hover:bg-red-600">
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full max-w-3xl mx-auto mt-6 p-4 bg-gray-50 rounded-lg shadow-sm">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">{post.title}</h1>
                    <div className="prose lg:prose-xl">
                        {parse(post.content)}
                    </div>
                </div>
            </Container>
        </div>
    ) : null;
}
