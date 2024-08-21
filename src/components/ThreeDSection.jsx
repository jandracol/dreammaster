import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import PropTypes from "prop-types";
import { Object3D } from "three";

function Model({ url }) {
  const { scene } = useGLTF(url);
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta;
    }
  });

  return (
    <Object3D ref={ref}>
      <primitive object={scene} />
    </Object3D>
  );
}

Model.propTypes = {
  url: PropTypes.string.isRequired,
};

function SimpleBox() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function ThreeDSection() {
  return (
    <div className="w-full h-[400px]">
      <ErrorBoundary>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <SimpleBox />
          <OrbitControls />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("3D rendering error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>Error loading 3D content. Please try refreshing the page.</div>
      );
    }

    return this.props.children;
  }
}

export default ThreeDSection;
