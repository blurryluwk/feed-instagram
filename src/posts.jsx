export const posts = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  username: ` User${i + 1}`,
  avatarUrl: `https://i.pravatar.cc/30?img=${i + 3}`,
  imageUrl: `https://picsum.photos/seed/post${i + 9}/600/500`,
  numberOfLikes: Math.floor(Math.random() * 10000),
  description: `User${i + 1}: Lorem ipsum dolor sit amet. Est harum corporis...`,
}));

