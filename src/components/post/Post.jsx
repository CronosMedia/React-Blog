import './post.css'

export default function Post() {
    return (
        <div className='post'>
            <img src="https://images.pexels.com/photos/3889704/pexels-photo-3889704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className='postDescription'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat exercitationem officiis sint nesciunt quasi eaque ea quos aspernatur mollitia iste neque quas quo, ducimus perspiciatis fugiat aut earum repellendus.
            Totam, minima quaerat aspernatur aut atque, cupiditate, labore ad officia veritatis esse ducimus numquam nesciunt tenetur commodi exercitationem tempore fugiat eius corrupti optio nulla deleniti accusamus dolorem perferendis. Dolores, reprehenderit.
            Explicabo omnis laudantium nobis vero ut, est, eveniet consectetur corporis ipsa deserunt recusandae architecto quos modi consequuntur vel a voluptate vitae dolore magni ab possimus expedita iste. Non, aperiam reiciendis!</p>
        </div>
    )
}
