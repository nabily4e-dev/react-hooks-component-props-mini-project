import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
    // const {posts} = props;
    //
    // const articleElements = posts.map((post) => (
    //     <Article
    //         key={post.id}
    //         title={post.title}
    //         date={post.date}
    //         preview={post.preview}
    //     />
    // ))
    // return (
    //     <main>
    //         {articleElements}
    //     </main>
    // )

    return (
        <main>
            {posts.map(({id, title, date, preview}) => (
                <Article key={id} title={title} date={date} preview={preview}/>
            ))}
        </main>
    )

}

export default ArticleList;