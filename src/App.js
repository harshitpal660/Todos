// Importing necessary dependencies
import AddTodo from "./Components/addTodo";
import Todos from "./Components/todos";
import animationData from "./Animation/Animation.json";
import lottie from "lottie-web";
import { useEffect } from "react";

// App component
function App() {
  // Setting up bird animations
  useEffect(() => {
    // Loading the Lottie animation when the component mounts
    const anim = lottie.loadAnimation({
      container: document.getElementsByClassName("Animation")[0], // Specifying the HTML element where the animation will be rendered
      renderer: "svg", // Choosing the renderer (canvas, svg)
      loop: true,
      autoplay: true,
      animationData: animationData, // Passing our JSON animation data
    });

    // Cleaning up animation on component unmount
    return () => anim.destroy();
  }, []);

  // Rendering the main App component
  return (
    <div className="App absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 sm:w-2/3 lg:w-1/2">
      {/* Title */}
      <h1 className="text-2xl font-bold my-2.5 text-center">Todo List</h1>

      {/* AddTodo component for adding new todos */}
      <AddTodo />

      {/*    for Lottie animation */}
      <div className="Animation"></div>

      {/* Todos component for displaying the list of todos */}
      <Todos />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
