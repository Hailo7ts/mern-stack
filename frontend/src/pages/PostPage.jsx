import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductStore } from "../store/product";

const PostPage = () => {
  const { fetchProducts, products } = useProductStore();
  let { id } = useParams();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

  const findPost = () =>{
    let foundPost = {}
    products.forEach(post =>{
      if(post._id === id){
        foundPost = post
      }
    })

    return foundPost
  }

  let post = findPost()
  

	/*const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		onClose();
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: "Product updated successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};*/
  
  return (
    <div className='container justify-self-center m-8' key={post._id}>
      <div className="bg-[#b6866e] card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={post.image}
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.content}</p>
          <span>{post.author}</span>
          <span>{post.stars}</span>
          <div className="card-actions justify-end">
            <Link to={`/edit/${post._id}`} className="btn btn-primary"> Edit </Link>
            <Link to={`/`} onClick={() => handleDelete(post._id)} className="btn btn-primary">Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PostPage;