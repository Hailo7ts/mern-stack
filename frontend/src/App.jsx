import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import EditPage from "./pages/EditPage"
import PostPage from "./pages/PostPage"
import Navbar from "./components/Navbar";

function App() {
	return (
		<Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/create' element={<CreatePage />} />
				<Route path='//edit/:id' element={<EditPage />} />
				<Route path='/:id' element={<PostPage />} />
			</Routes>
		</Box>
	);
}

export default App;
