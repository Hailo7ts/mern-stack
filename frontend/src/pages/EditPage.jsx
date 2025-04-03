import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useProductStore } from "../store/product";

const EditPage  = ({ product }) => {
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

  //update 

  const [updatedProduct, setUpdatedProduct] = useState(product);

	const { updateProduct } = useProductStore();
	const toast = useToast();

  const handleUpdateProduct = async (pid, updatedProduct) => {
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
	};
  

  return(
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Edit Pin!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>

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
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

            <form className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input type="text" name="title" placeholder="Title" className="input input-bordered"
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}/>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Author</span>
                </label>
                <input type="text" name="author" placeholder="Author" className="input input-bordered" 
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}/>              
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input type="text" name="image" placeholder="Image URL" className="input input-bordered" 
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}/>              
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <input type="textarea" name="content" placeholder="Content" className="input input-bordered" 
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}/>              
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating 1-5</span>
                </label>
                <input type='number' name="stars" placeholder="Rating" className="input input-bordered" 
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}/>              
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary"
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                  Update</button>
              </div>
            </form>

          </div>
        </div>
    </div>
  )
}

export default EditPage;