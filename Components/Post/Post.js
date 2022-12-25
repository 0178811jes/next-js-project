import Link from "next/link";

const Post = ({ post }) => {
    return (
        <div className="card mt-10 bg-primary text-primary-content">
            <div className="card-body">
                <h2 className="card-title">Title: {post.title}</h2>
                <div className="card-actions justify-end">
                    <Link href={`/posts/${post?.id}`}>
                    <button className="btn">See details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;