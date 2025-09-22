import { Mask } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Masking = () => {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <Mask id={1} position={[0, 0.7, 0]}>
      <planeGeometry args={[width * 2, height]} />
      <meshBasicMaterial />
    </Mask>
  );
};

export default Masking;
