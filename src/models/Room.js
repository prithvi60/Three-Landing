import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
// import {But} from "/public/assets/room.glb"
export function Room(props) {
  const group = useRef();
  //   const modelLoader = new GLTFLoader();
  //   modelLoader.load("/assets/models/myModel.glb", ...rest of the code...
  const { nodes, materials, animations } = useGLTF(process.env.PUBLIC_URL + "/assets/room.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(()=>{
    console.log(actions)
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="46bad7312544491e9dac8ba6f48d2c23fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Walls&Floors_low"
                  position={[-51.986, 0, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Walls&Floors_low_Walls_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Walls&Floors_low_Walls_0"].geometry}
                    material={materials.Walls}
                  />
                  <mesh
                    name="Walls&Floors_low_Floor&Ceilling_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes["Walls&Floors_low_Floor&Ceilling_0"].geometry
                    }
                    material={materials.FloorCeilling}
                  />
                </group>
                <group name="Airlock" position={[-84.616, 280.461, -89.345]}>
                  <mesh
                    name="Airlock_Airlock_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Airlock_Airlock_0.geometry}
                    material={materials.Airlock}
                  />
                </group>
                <group
                  name="Leder"
                  position={[-88.779, 289.766, -110.519]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Leder_Vent&Leder_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Leder_Vent&Leder_0"].geometry}
                    material={materials.VentLeder}
                  />
                </group>
                <group
                  name="Ventilation"
                  position={[-128.478, 235.604, -234.01]}
                >
                  <mesh
                    name="Ventilation_Ventilation_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Ventilation_Ventilation_0.geometry}
                    material={materials.Ventilation}
                  />
                  <group name="Fan" position={[-3.453, 0, 0]}>
                    <mesh
                      name="Fan_Ventilation_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Fan_Ventilation_0.geometry}
                      material={materials.Ventilation}
                    />
                  </group>
                </group>
                <group
                  name="Vent001"
                  position={[-136.27, 166.587, -235.828]}
                  rotation={[Math.PI / 2, 0, Math.PI / 2]}
                >
                  <mesh
                    name="Vent001_Vent&Leder_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Vent001_Vent&Leder_0"].geometry}
                    material={materials.VentLeder}
                  />
                </group>
                <group
                  name="Vent002"
                  position={[278.937, 194.014, 60.39]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <mesh
                    name="Vent002_Vent&Leder_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Vent002_Vent&Leder_0"].geometry}
                    material={materials.VentLeder}
                  />
                </group>
                <group
                  name="Door_low"
                  position={[403.407, -0.071, 159.689]}
                  rotation={[Math.PI / 2, 0, Math.PI / 2]}
                  scale={0.042}
                >
                  <mesh
                    name="Door_low_Door_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Door_low_Door_0.geometry}
                    material={materials.Door}
                  />
                </group>
                <group
                  name="DecorativePanels"
                  position={[334.851, 12.853, 258.934]}
                >
                  <mesh
                    name="DecorativePanels_DecorativePanels_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.DecorativePanels_DecorativePanels_0.geometry
                    }
                    material={materials.DecorativePanels}
                  />
                </group>
                <group
                  name="AirPipe"
                  position={[-500, 260.931, 148.21]}
                  rotation={[0, -Math.PI / 2, 0]}
                  scale={0.01}
                >
                  <mesh
                    name="AirPipe_AirPipe_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.AirPipe_AirPipe_0.geometry}
                    material={materials.AirPipe}
                  />
                </group>
                <group
                  name="Pipes"
                  position={[-500, 261.047, -313.786]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                >
                  <mesh
                    name="Pipes_Pipe_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Pipes_Pipe_0.geometry}
                    material={materials.Pipe}
                  />
                </group>
                <group
                  name="CellingLamp"
                  position={[-327.51, 280.56, -215.493]}
                >
                  <mesh
                    name="CellingLamp_CeillingLamp_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.CellingLamp_CeillingLamp_0.geometry}
                    material={materials.CeillingLamp}
                  />
                </group>
                <group
                  name="Surveillance_Camera"
                  position={[374.546, 228.229, 233.207]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={0.233}
                >
                  <mesh
                    name="Surveillance_Camera_Camera_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Surveillance_Camera_Camera_0.geometry}
                    material={materials.Camera}
                  />
                </group>
                <group
                  name="BedFrame"
                  position={[-51.168, 7.836, -223.823]}
                  rotation={[0, -Math.PI / 2, 0]}
                >
                  <mesh
                    name="BedFrame_BedFrame_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.BedFrame_BedFrame_0.geometry}
                    material={materials.BedFrame}
                  />
                  <group
                    name="BedPillows"
                    position={[0, -2.5, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="BedPillows_BedFabrics_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BedPillows_BedFabrics_0.geometry}
                      material={materials.BedFabrics}
                    />
                  </group>
                  <group
                    name="BedSheet"
                    position={[0, -2.5, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="BedSheet_BedFabrics_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BedSheet_BedFabrics_0.geometry}
                      material={materials.BedFabrics}
                    />
                  </group>
                  <group
                    name="BedComforter"
                    position={[0, -2.5, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="BedComforter_BedFabrics_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BedComforter_BedFabrics_0.geometry}
                      material={materials.BedFabrics}
                    />
                  </group>
                  <group
                    name="BedCover"
                    position={[0, -2.5, 0]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="BedCover_BedFabrics_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.BedCover_BedFabrics_0.geometry}
                      material={materials.BedFabrics}
                    />
                  </group>
                </group>
                <group
                  name="Ammobox"
                  position={[-188.633, 5.863, -245.633]}
                  rotation={[-Math.PI, 1.351, Math.PI]}
                >
                  <mesh
                    name="Ammobox_AmmoBox_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Ammobox_AmmoBox_0.geometry}
                    material={materials.AmmoBox}
                  />
                </group>
                <group
                  name="Ammobox001"
                  position={[-207.318, 5.863, -307.93]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <mesh
                    name="Ammobox001_AmmoBox_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Ammobox001_AmmoBox_0.geometry}
                    material={materials.AmmoBox}
                  />
                </group>
                <group
                  name="Ammobox002"
                  position={[-207.318, 32.927, -307.93]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <mesh
                    name="Ammobox002_AmmoBox_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Ammobox002_AmmoBox_0.geometry}
                    material={materials.AmmoBox}
                  />
                </group>
                <group
                  name="Ammobox003"
                  position={[-207.318, 0.364, 231.856]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <mesh
                    name="Ammobox003_AmmoBox_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Ammobox003_AmmoBox_0.geometry}
                    material={materials.AmmoBox}
                  />
                </group>
                <group
                  name="Ammobox004"
                  position={[-207.318, 27.428, 231.856]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <mesh
                    name="Ammobox004_AmmoBox_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Ammobox004_AmmoBox_0.geometry}
                    material={materials.AmmoBox}
                  />
                </group>
                <group
                  name="Ammobox005"
                  position={[-207.318, 55.07, 231.856]}
                  rotation={[-Math.PI, 0, -Math.PI]}
                >
                  <mesh
                    name="Ammobox005_AmmoBox_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Ammobox005_AmmoBox_0.geometry}
                    material={materials.AmmoBox}
                  />
                </group>
                <group name="OfficeTable" position={[9.497, 45, -15.541]}>
                  <mesh
                    name="OfficeTable_Tables_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.OfficeTable_Tables_0.geometry}
                    material={materials.Tables}
                  />
                </group>
                <group name="TeaTable" position={[-340.02, 5, -7.871]}>
                  <mesh
                    name="TeaTable_Tables_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.TeaTable_Tables_0.geometry}
                    material={materials.Tables}
                  />
                </group>
                <group
                  name="Books001"
                  position={[-224.312, 80.99, 195.224]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={0.01}
                >
                  <mesh
                    name="Books001_Books_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books001_Books_0.geometry}
                    material={materials.Books}
                  />
                </group>
                <group
                  name="Books002"
                  position={[-327.567, 38, -57.142]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                >
                  <mesh
                    name="Books002_Books_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books002_Books_0.geometry}
                    material={materials.Books}
                  />
                </group>
                <group
                  name="Books003"
                  position={[-273.554, 5.158, -304.716]}
                  rotation={[Math.PI / 2, 0, -0.868]}
                  scale={0.01}
                >
                  <mesh
                    name="Books003_Books_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books003_Books_0.geometry}
                    material={materials.Books}
                  />
                </group>
                <group
                  name="Books004"
                  position={[-327.567, 38, -26.372]}
                  rotation={[Math.PI / 2, 0, 0.285]}
                  scale={0.01}
                >
                  <mesh
                    name="Books004_Books_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books004_Books_0.geometry}
                    material={materials.Books}
                  />
                </group>
                <group
                  name="Books005"
                  position={[-327.567, 38, -26.372]}
                  rotation={[Math.PI / 2, 0, 0.285]}
                  scale={0.01}
                >
                  <mesh
                    name="Books005_Books_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books005_Books_0.geometry}
                    material={materials.Books}
                  />
                </group>
                <group
                  name="Books006"
                  position={[-224.312, 80.99, 195.224]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                  scale={0.01}
                >
                  <mesh
                    name="Books006_Books_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books006_Books_0.geometry}
                    material={materials.Books}
                  />
                </group>
                <group
                  name="Books007"
                  position={[-327.567, 38, -57.142]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                >
                  <mesh
                    name="Books007_Books_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books007_Books_0.geometry}
                    material={materials.Books}
                  />
                </group>
                <group
                  name="Books009"
                  position={[-327.567, 38, -57.142]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.01}
                >
                  <mesh
                    name="Books009_Books_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books009_Books_0.geometry}
                    material={materials.Books}
                  />
                </group>
                <group
                  name="Books010"
                  position={[13.46, 5, 15.426]}
                  rotation={[Math.PI / 2, 0, 0.996]}
                  scale={0.017}
                >
                  <mesh
                    name="Books010_Books_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Books010_Books_0.geometry}
                    material={materials.Books}
                  />
                </group>
                <group
                  name="Poster"
                  position={[49.478, 191.458, -85.789]}
                  rotation={[-Math.PI, Math.PI / 2, 0]}
                  scale={0.029}
                >
                  <mesh
                    name="Poster_Books_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Poster_Books_0.geometry}
                    material={materials.Books}
                  />
                </group>
                <group
                  name="Papers"
                  position={[-411.377, 5.372, -223.096]}
                  rotation={[0, 0.188, 0]}
                >
                  <mesh
                    name="Papers_Papers_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Papers_Papers_0.geometry}
                    material={materials.Papers}
                  />
                </group>
                <group
                  name="Papers001"
                  position={[-73.685, 5.372, 44.138]}
                  rotation={[-Math.PI, 1.315, Math.PI]}
                >
                  <mesh
                    name="Papers001_Papers_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Papers001_Papers_0.geometry}
                    material={materials.Papers}
                  />
                </group>
                <group
                  name="Papers002"
                  position={[49.398, 215.194, -36.392]}
                  rotation={[-2.885, 0, -Math.PI / 2]}
                >
                  <mesh
                    name="Papers002_Papers_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Papers002_Papers_0.geometry}
                    material={materials.Papers}
                  />
                </group>
                <group
                  name="Sofa"
                  position={[-449.521, 4.482, -16.459]}
                  rotation={[0, Math.PI / 2, 0]}
                >
                  <mesh
                    name="Sofa_Sofa_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Sofa_Sofa_0.geometry}
                    material={materials.Sofa}
                  />
                </group>
                <group
                  name="Chair"
                  position={[-288.854, 50, -183.057]}
                  rotation={[0, -0.589, 0]}
                  scale={0.45}
                >
                  <mesh
                    name="Chair_ChairMetal_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Chair_ChairMetal_0.geometry}
                    material={materials.ChairMetal}
                  />
                  <group name="Chair001">
                    <mesh
                      name="Chair001_Chair_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Chair001_Chair_0.geometry}
                      material={materials.Chair}
                    />
                  </group>
                </group>
                <group
                  name="OfficeChair"
                  position={[-74.66, 5, -28.804]}
                  rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                >
                  <mesh
                    name="OfficeChair_OfficeChair_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.OfficeChair_OfficeChair_0.geometry}
                    material={materials.OfficeChair}
                  />
                </group>
                <group
                  name="Handcuffs&Bottle"
                  position={[-355.043, 38.589, 45.85]}
                  rotation={[-Math.PI, 0.643, Math.PI]}
                >
                  <mesh
                    name="Handcuffs&Bottle_Handcuffs&Bottle_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes["Handcuffs&Bottle_Handcuffs&Bottle_0"].geometry
                    }
                    material={materials.HandcuffsBottle}
                  />
                </group>
                <group
                  name="KeyBoard"
                  position={[-13.19, 85.122, -28.816]}
                  rotation={[0, -Math.PI / 2, 0]}
                >
                  <mesh
                    name="KeyBoard_Keyboard_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.KeyBoard_Keyboard_0.geometry}
                    material={materials.Keyboard}
                  />
                  <group name="Mause" position={[49.169, 0.004, -7.854]}>
                    <mesh
                      name="Mause_Monitor&Mouse_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Mause_Monitor&Mouse_0"].geometry}
                      material={materials.MonitorMouse}
                    />
                  </group>
                  <group
                    name="Monitor001"
                    position={[-1.267, 25.409, -45.482]}
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <mesh
                      name="Monitor001_Monitor&Mouse_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Monitor001_Monitor&Mouse_0"].geometry}
                      material={materials.MonitorMouse}
                    />
                  </group>
                  <group
                    name="Monitor002"
                    position={[50.947, 25.409, -30.313]}
                    rotation={[Math.PI / 2, 0, 0.582]}
                    scale={0.01}
                  >
                    <mesh
                      name="Monitor002_Monitor&Mouse_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Monitor002_Monitor&Mouse_0"].geometry}
                      material={materials.MonitorMouse}
                    />
                  </group>
                  <group
                    name="Monitor003"
                    position={[-52.947, 25.409, -29.892]}
                    rotation={[Math.PI / 2, 0, -0.606]}
                    scale={0.01}
                  >
                    <mesh
                      name="Monitor003_Monitor&Mouse_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Monitor003_Monitor&Mouse_0"].geometry}
                      material={materials.MonitorMouse}
                    />
                  </group>
                  <group
                    name="Monitor004"
                    position={[-1.267, 62.256, -50.083]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                  >
                    <mesh
                      name="Monitor004_Monitor&Mouse_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Monitor004_Monitor&Mouse_0"].geometry}
                      material={materials.MonitorMouse}
                    />
                  </group>
                </group>
                <group name="Pot" position={[235.166, 6.591, 88.588]}>
                  <mesh
                    name="Pot_Pot_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Pot_Pot_0.geometry}
                    material={materials.material}
                  />
                  <group name="Plant" position={[-0.257, 24.385, -0.261]}>
                    <mesh
                      name="Plant_Plant_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Plant_Plant_0.geometry}
                      material={materials.Plant}
                    />
                  </group>
                </group>
                <group
                  name="ChineseSoldier_low"
                  position={[134.009, 85.359, 82.553]}
                >
                  <mesh
                    name="ChineseSoldier_low_ChineseSoldier_0"
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.ChineseSoldier_low_ChineseSoldier_0.geometry
                    }
                    material={materials.ChineseSoldier}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(process.env.PUBLIC_URL + "/assets/room.glb");
