import { Fragment } from "react"
import Hero from "../components/home-page/hero"
import FeaturedPosts from "../components/home-page/featuredpost"
import { getFeaturedPosts } from "../lib/posts-util"
import Head from "next/head"
import Footer from "../components/footer/footer"


function HomePage(props){
    return(
        <Fragment>
            <Head>
                <title>Aifu Blog</title>
                <meta name='description' content='I post about programming and web development.' />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
            <Footer />
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return{
        props: {
            posts: featuredPosts
        },
    }
}

export default HomePage