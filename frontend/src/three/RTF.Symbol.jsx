import { useSelector } from "react-redux";
import { useGLTF } from "@react-three/drei";

const SymbolComponent = ({ id, position }) => {
  const [row, col] = id;
  const board = useSelector((state) => state.gameState.board);

  
  const getModelPath = () => {
    console.log("aaaaaaaaaaaa")
    switch (board[row][col]) {
      case "x":
        return "public/cross.gltf";
      case "o":
        return "public/torus.gltf";
      default:
        return null;
    }
  };

  const modelPath = getModelPath();
  if (!modelPath) return null; // If no model, render nothing


  const { scene } = useGLTF(modelPath); // Load model

  return <primitive object={scene} position={position} />;
};

export default SymbolComponent;
