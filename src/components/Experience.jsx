import { OrbitControls, Box, Sphere, Torus } from "@react-three/drei";
import { BallCollider, RigidBody } from "@react-three/rapier";

/** 
 * @ambientLight : 주변광 설정
 * @directionalLight : 방향광 설정
 * 
 * @OrbitControls : 카메라 제어 컴포넌트 (마우스를 통해 확대/축소, 회전, 이동 기능 지원)
 * 
 * @RigidBody : 물리적 상호작용을 정의하는 데 사용하는 컴포넌트,
 *    해당 컴포넌트 내부의 3D 객체는 물리 엔진의 영향을 받음
 *  ㄴ @colliders : 충돌체를 정의 (물리 엔진에서 충돌을 처리할 때 사용)
 *      ㄴ @ball : 구 형태 충돌체 정의
 *      ㄴ @hull : 해당 3D 객체를 완전히 감싸는 가장 작은 다각형 블록 형태를 사용,
 *          계산이 빠르고 효율적이나 섬세한 충돌체를 가지지 않는 단점이 있음
 *      ㄴ @trimesh : 삼각형 메쉬를 사용하여 충돌체를 정의,
 *          복잡한 형태의 물체에 적합하나 리소스를 그만큼 사용함
 *  ㄴ @gravityScale : 해당 객체에 대한 중력의 크기 조절,
 *      Physics에 중력이 설정되어 있다면 {해당 값 * gravityScale}이 적용됨
 *  ㄴ @type {fixed} : 해당 컴포넌트는 고정된 상태로 설정,
 *      물리 엔진에 의해 움직이지 않으며 다른 객체와 충돌할 때 반응
 *  ㄴ @restitution : 반발계수 (값이 높을수록 더 강하게 튀어오름)
 * 
 * @Box : 상자 3D 객체 생성 컴포넌트
 * @Sphere : 구 3D 객체 생성 컴포넌트
 * @Torus : 토러스(도넛) 3D 객체 생성 컴포넌트
 * 
 * @meshStandardMaterial : 객체에 적용할 재질
 */
export const Experience = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />
      <OrbitControls />

      <RigidBody position={[0, 5, 0]} colliders={"ball"} gravityScale={4}>
        <Sphere>
          <meshStandardMaterial color={"hotpink"} />
        </Sphere>
      </RigidBody>

      <RigidBody position={[-2, 5, 0]} colliders="trimesh" >
        <Torus>
          <meshStandardMaterial color="orange" />
        </Torus>
      </RigidBody>

      <RigidBody position={[3, 5, 0]}>
        <Box>
          <meshStandardMaterial color="royalblue" />
        </Box>
      </RigidBody>

      <RigidBody type="fixed" restitution={2}>
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshNormalMaterial color="springgreen" />
        </Box>
      </RigidBody>
    </>
  );
};
