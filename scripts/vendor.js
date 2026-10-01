// Copia as dependências de node_modules para vendor/, que é o que o index.html carrega.
// Assim a página roda direto no WAMP (ou em qualquer servidor estático) sem depender de CDN.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const ex = 'node_modules/three/examples/js';
const files = [
  ['node_modules/three/build/three.min.js', 'vendor/three.min.js'],
  // carregador de modelos 3D .glb/.gltf e descompressor Draco (modelos compactados)
  [`${ex}/loaders/GLTFLoader.js`, 'vendor/GLTFLoader.js'],
  [`${ex}/loaders/DRACOLoader.js`, 'vendor/DRACOLoader.js'],
  [`${ex}/libs/draco/gltf/draco_decoder.js`, 'vendor/draco/draco_decoder.js'],
  [`${ex}/libs/draco/gltf/draco_decoder.wasm`, 'vendor/draco/draco_decoder.wasm'],
  [`${ex}/libs/draco/gltf/draco_wasm_wrapper.js`, 'vendor/draco/draco_wasm_wrapper.js']
];

for (const [from, to] of files) {
  fs.mkdirSync(path.dirname(path.join(root, to)), { recursive: true });
  fs.copyFileSync(path.join(root, from), path.join(root, to));
  console.log(`vendor: ${from} -> ${to}`);
}
