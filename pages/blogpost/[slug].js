import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const Id = ({post}) => {
    const [blog, setblog] = useState(post);
    // const router =useRouter();
    // const {slug}=router.query;

    // useEffect(() => {
    //     if (!router.isReady) return;
    //     console.log("-----------------------------")
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
    //     .then(response => response.json())
    //     .then(response => setblog(response))
    //   },[router.isReady])

    return (
        <div>
           slug:- {blog && blog.id}
           <h1>{blog && blog.title}</h1>
           <div>{blog && blog.body}</div>
        </div>
    );
}

export default Id;


export async function getServerSideProps(context){
    const {slug}=context.query;
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    const data = await responce.json();
    // console.log(data);  

    return {
        props:{
            post:data
        }
    }
} 
