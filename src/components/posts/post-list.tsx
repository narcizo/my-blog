import type { Post } from "@/model/post";
import PostComponent from "./post";

interface PostListComponentProps {
    postList: Post[],
}

export default function PostListComponent({ postList }: PostListComponentProps) {
    console.log("PostList");

    return (
        <>
            {postList.map(((post, index) =>
                <div className="w-3/5 px-10 py-4" key={index}>
                    <PostComponent post={post}/>
                </div>
            ))}
        </>
    );
}