import Toolbar from "@/components/toolbar";
import Footer from "@/components/footer";

import PostListComponent from "@/components/posts/post-list";
import type { Post } from "@/model/post";

export default function Home() {
    const postList: Post[] = [
        {
            title: "LEGO Lessons in React: When My 5-Year-Old Made Me Rethink Component Design",
            subtitle: "Eu sou um subtitulo",
            content: `Remember that feeling of opening a new LEGO set as a kid? The excitement, the clear instructions, the satisfaction of pieces clicking together perfectly. Now remember your last code review of a “flexible” enterprise component. Not quite the same feeling, is it?
            After years of watching developers (including myself) struggle with over-engineered solutions, I’ve learned that the best React architectures have more in common with LEGO than with the complex machinery we sometimes try to build.`,
            image: "",
            likes: 0,
        },
        {
            title: "LEGO Lessons in React: When My 5-Year-Old Made Me Rethink Component Design",
            subtitle: "Eu sou um subtitulo",
            content: `Remember that feeling of opening a new LEGO set as a kid? The excitement, the clear instructions, the satisfaction of pieces clicking together perfectly. Now remember your last code review of a “flexible” enterprise component. Not quite the same feeling, is it?
            After years of watching developers (including myself) struggle with over-engineered solutions, I’ve learned that the best React architectures have more in common with LEGO than with the complex machinery we sometimes try to build.`,
            image: "",
            likes: 100,
        },
        {
            title: "LEGO Lessons in React: When My 5-Year-Old Made Me Rethink Component Design",
            subtitle: "Eu sou um subtitulo",
            content: `Remember that feeling of opening a new LEGO set as a kid? The excitement, the clear instructions, the satisfaction of pieces clicking together perfectly. Now remember your last code review of a “flexible” enterprise component. Not quite the same feeling, is it?
            After years of watching developers (including myself) struggle with over-engineered solutions, I’ve learned that the best React architectures have more in common with LEGO than with the complex machinery we sometimes try to build.`,
            image: "",
            likes: 0,
        },
    ];

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Toolbar/>
                <div className="flex flex-col justify-center items-center flex-grow">
                    <PostListComponent postList={postList}/>
                    { 
                        postList.length === 0
                            ?<h1>
                                Sorry, no posts to show :(
                            </h1>
                            :<></>
                    }
                </div>
                <Footer/>
            </div>
        </>
    );
}