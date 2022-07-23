import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component';

const Blogs = ({posts}) => {

    const [blogs, setblogs] = useState(posts);
    const [hasMore, setHasMore] = useState(true);

    
    const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_start=${blogs.length}&_limit=10`
        );
        const newPosts = await res.json();
        if(newPosts.length==0){
            setHasMore(false)
        }
        console.log(newPosts); 
        console.log(123132); 
        setblogs((blogs) => [...blogs, ...newPosts]);
      };

      
    // const fetchData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        // setTimeout(() => {
        //   this.setState({
        //     items: this.state.items.concat(Array.from({ length: 20 }))
        //   });
        // }, 1500);
    //   };

    // useEffect(() => {
    //     console.log("-----------------------------")
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(response => response.json())
    //     .then(response => setblogs(response))
    //   },[])
      
    return (
        <>

        <div>
            Blogs list
        </div>

        <InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchData}
  hasMore={hasMore}
  loader={<h3> Loading...</h3>}
  endMessage={<h4>Nothing more to show</h4>}
>
        {
            blogs.map((data)=>{
                return (    
                <div key={data.id}>
                    <Link href={`/blogpost/${data.id}`}><a><h1>{data.title}</h1></a></Link> 
                     <p>{data.body}</p>
                 </div>
                )
            })
        }   
</InfiniteScroll>


        {/* {
            blogs.map((data)=>{
                return (    
                <div key={data.id}>
                    <Link href={`/blogpost/${data.id}`}><a><h1>{data.title}</h1></a></Link> 
                     <p>{data.body}</p>
                 </div>
                )
            })
        } */}
        </>
     
    );
}

export default Blogs;

export async function getStaticProps(){

    const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await responce.json();
    console.log(data);  

    return {
        props:{
            posts:data
        }
    }
} 