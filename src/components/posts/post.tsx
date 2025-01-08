import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import type { Post } from "@/model/post";
import { Heart } from "lucide-react";

interface PostComponentProps {
    post: Post;
}

export default function PostComponent({ post } : PostComponentProps){
    console.log("Post");

    return (
        <>
        <Card>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{post.content.substring(0, 200) + " ..."}</p>
            </CardContent>
            <CardFooter>
                <Heart fill="#fd0e35"/>
                <p>{post.likes}</p>
            </CardFooter>
        </Card>
        </>
    )
}