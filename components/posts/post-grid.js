import Postitem from './post-item';
import classes from './post-grid.module.css';

function PostsGrid(props){
    const {posts} = props;
    return(
        <ul className={classes.grid}>
            {posts.map(post =>
                 <Postitem key={post.slug} post={post} />
            )}
        </ul>
    )
}

export default PostsGrid;