import * as THREE from 'three';
import { Core } from "../Core.js";

const materialBlue = new THREE.MeshStandardMaterial({ color: 0x00ffff });
const materialRed = new THREE.MeshStandardMaterial({ color: 0xE42E22 });
const materialGreen = new THREE.MeshStandardMaterial({ color: 0x67F15B });
const materialYellow = new THREE.MeshStandardMaterial({ color: 0xE4BA22 });
const materialDarkBlue = new THREE.MeshStandardMaterial({ color: 0x1868A1 });
const materialSkyBlue = new THREE.MeshStandardMaterial({ color: 0x92C8EF });

const listBox = [
    {
        role: 'finish',
        positionX: 0,
        positionY: 10,
        positionZ: -80,
        scaleX: 10,
        scaleY: 10,
        scaleZ: 10,
        mass: 0,
        material: materialSkyBlue,
    },
    {
        positionX: 0,
        positionY: 10,
        positionZ: 0,
        scaleX: 10,
        scaleY: 10,
        scaleZ: 30,
        mass: 0,
        material: materialDarkBlue,
    },
    {
        positionX: 0,
        positionY: 20,
        positionZ: -10,
        scaleX: 2,
        scaleY: 2,
        scaleZ: 2,
        mass: 2,
        material: materialGreen,
    },
    {
        positionX: 0,
        positionY: 25,
        positionZ: -12.5,
        scaleX: 2,
        scaleY: 2,
        scaleZ: 2,
        mass: 2,
        material: materialGreen,
    },
    {
        positionX: 0,
        positionY: 30,
        positionZ: -12.5,
        scaleX: 2,
        scaleY: 2,
        scaleZ: 2,
        mass: 2,
        material: materialGreen,
    },
    {
        positionX: -3,
        positionY: 20,
        positionZ: -5,
        scaleX: 2,
        scaleY: 6,
        scaleZ: 2,
        mass: 100,
        material: materialRed,
    },
    {
        positionX: 3,
        positionY: 20,
        positionZ: -5,
        scaleX: 2,
        scaleY: 6,
        scaleZ: 2,
        mass: 100,
        material: materialRed,
    },
    {
        positionX: 0,
        positionY: 18,
        positionZ: -30,
        rotationX: Math.PI / 4,
        scaleX: 10,
        scaleY: 10,
        scaleZ: 10,
        mass: 0,
        material: materialBlue,
    },
    {
        positionX: 0,
        positionY: 18,
        positionZ: -50,
        scaleX: 10,
        scaleY: 10,
        scaleZ: 35,
        mass: 0,
        material: materialBlue,
    },
    {
        positionX: 0,
        positionY: 60,
        positionZ: -60,
        scaleX: 10,
        scaleY: 6,
        scaleZ: 20,
        mass: 1000,
        damping: 0.99,
        material: materialRed,
    },
    {
        positionX: 0,
        positionY: 25,
        positionZ: -35,
        scaleX: 3,
        scaleY: 3,
        scaleZ: 3,
        mass: 1,
        material: materialGreen,
    },
];
const listSphere = [
    {
        positionX: 3,
        positionY: 40,
        positionZ: -30,
        scale: 3,
        mass: 100,
        damping: 0.9,
        material: materialRed,
    },
];
const nextLevel = "Level_5.html";

const play = new Core(listBox, listSphere, nextLevel);