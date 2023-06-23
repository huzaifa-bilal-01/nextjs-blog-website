import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';


function PostContent(props) {
    const {post} = props;

    const ImagePath = `/images/posts/${post.slug}/${post.image}`;
    const customRenderers = {
        img(image) {
            return(
                <Image 
                src={`/images/posts/${post.slug}/${image.src}`} 
                alt={image.alt}
                layout = "responsive"
                width = {600}
                height = {300} 
                sizes="(max-width: 768px) 100vw, 600px"
            />
            )
        }   
    }

    return(
        <article className={classes.content}>
            <PostHeader title={post.title} image = {ImagePath} />
            <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
        </article>
    )
}

export default PostContent;