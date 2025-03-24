import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
	const { fetchProducts, products } = useProductStore();

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);
	console.log("products", products);

	return (
		<div className="flex flex-wrap gap-5 mt-10 mb-10 justify-center">
  
      {products.map((post) => (            
            
        <div className="card bg-base-100 w-1/5 h-[32rem] shadow-xl duration-500 hover:scale-105 hover:bg-[#8c7768] overflow-hidden" key={post._id}>
            
          <Link to={`/posts/${post._id}`} className=''>
            <img
              src={post.image} 
              alt={post.title} 
              className=" w-full h-4/5 object-cover"
            />
              
            <div className="card-body h-full">

              <h2 className="card-title">{post.title}</h2>

              <div className='justify-items-end justify-end'>
                <h4>{post.author}</h4>
                <h3>{post.stars}</h3>
              </div>



            </div>
          </Link>
        </div>
            
      ))}
      
    </div>
	);
};

/*
<Container maxW='container.xl' py={12}>
			<VStack spacing={8}>
				

				<SimpleGrid
					columns={{
						base: 1,
						md: 2,
						lg: 3,
					}}
					spacing={10}
					w={"full"}
				>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</SimpleGrid>

				{products.length === 0 && (
					<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
						No products found 😢{" "}
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
					</Text>
				)}
			</VStack>
		</Container>
		*/
export default HomePage;
