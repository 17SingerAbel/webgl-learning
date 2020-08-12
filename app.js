const vertexShaderText = 
[
'precision mediump float;',
'',
'attribute vec2 vertPositioin;',
'',
'void main()',
'{',
' gl_Position = vec4(vertPosition, 0.0, 1.0);',
'}'
].join('\n');


const InitDemo = () => {
  console.log('this is working');

  const canvas = document.getElementById('game-surface');
  let gl = canvas.getContext('wegbl');

  if (!gl) {
    console.log('WebGL not supported, falling back on experimental webgl');
    gl = canvas.getContext('experimental-webgl');
  } 
  if (!gl) {
    alert('Your browser does not support WebGL');
  }

  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  // gl.viewport(0, 0, window.innerWidth, window.innerHeight);

  gl.clearColor(0.75,0.85,0.8,1.0);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

}

const vertexShader = (vertPosition, vertColor) => {
  return {
    fragColor: vertColor,
    gl_Position: [vertPosition.x, vertPosition.y, 0.0, 1.0]
  }
}

