import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    return (
        props.savedPosts.map(post => {
            // Instead of post.name etc., destructure the posts from posts.json
            // to 4 separate values using a constant equal to post
            const {title, name, image, description} = post
            return <div className={css.SearchItem} key={title}>
                <p>{title}</p>
                <p>{name}</p>
                <img src={image} alt="random" />
                <p>{description}</p>
            </div>
            }
        )
    )
}

export default PostItem