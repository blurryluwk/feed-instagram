import { useState } from "react";
import { Heart, Heart as HeartFilled, Send, MessageCircle, Bookmark } from 'lucide-react';

const PostItem = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.numberOfLikes);

  {/* Curtir */}
  const toggleLike = () => {
    setLiked(!liked);
    setLikes((prev) => prev + (liked ? -1 : 1));
  };

  return (
    <div className="bg-white text-black rounded-lg shadow-md max-w-md mx-auto mb-8">
      <div className="flex items-center px-4 py-3">
        <img
  src={post.avatarUrl}
  alt={post.username}
  style={{
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    objectFit: 'cover'
  }}
/>
        <span className="font-semibold">{post.username}</span>
        <br />
      </div>

      <img
        src={post.imageUrl}
        alt="Postagem"
        className="w-full object-cover max-h-[500px]"
      />
      <br />

      <div className="flex items-center gap-4 px-4 py-2 text-xl">
        <button onClick={toggleLike}>
          {liked ? (
            <Heart className="text-red-500" />
          ) : (
            <HeartFilled className="text-black" />
          )}
        </button>
        <MessageCircle className="cursor-pointer" />
        <Send className="cursor-pointer"/>
      </div>

      <div className="px-4 text-sm font-medium">
        {likes} curtida{likes !== 1 && "s"}
      </div>

      <div className="px-4 pb-4 text-sm">
        <span className="font-semibold mr-1">  </span>
        {post.description}
        <br />
        <br />
      </div>

      
    </div>
  );

  
};

export default PostItem;
