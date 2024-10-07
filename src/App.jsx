/**
 * @fiber : Three.js를 React 스타일로 쉽게 사용할 수 있도록 해주는 라이브러리
 *  ㄴ @Canvas : Three.js의 캔버스 (3D 객체 렌더링 담당)
 * @Experience : (사용자 지정 컴포넌트)
 * @Physics : 충돌, 중력 등 물리 효과를 구현하기 위해 사용
 * @Suspense : 비동기적인 데이터 로딩을 처리할 때 사용,
 *  3D 모델이나 리소스를 로딩하는 동안 랜더링을 지연시켜 로딩이 끝나기 전까지 앱이 중단되지 않도록 도와줌
 */
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Experience } from "./components/Experience";
import { Suspense } from "react";

function App() {
  return (
    /**
     * @Canvas : 화면을 담고 있는 컨테이너 역할
     *  ㄴ @shadows : 출력시 그림자가 포함되도록 활성화
     *  ㄴ @camera : 카메라 설정
     *      ㄴ @position : 카메라 초기 위치 [x, y, z]
     *      ㄴ @fov : 카메라 시야각
     * 
     * @color : 색상 지정
     *  ㄴ @attach : 배경색 지정
     *  ㄴ @args : 색상 지정
     * 
     * @Physics
     *  ㄴ @gravity : 3D 공간의 중력 벡터를 의미하며 [x, y, z] 축에 대한 중력의 크기를 지정함
     * 
     * @Experience : 사용자 지정 컴포넌트 (3D 객체)
     */
    <Canvas shadows camera={{ position: [10, 10, 10], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Suspense>
        <Physics debug gravity={[0, -3, 0]}>
          <Experience />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default App;
