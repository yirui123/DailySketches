document.addEventListener('DOMContentLoaded', start);
var gl;

function start() {
  console.log('loaded');
  var canvas = document.getElementById('canvas');
  gl = canvas.getContext('webgl2');

  var triangleVertices = [
    1.0, -1.0, 0.0,
    0.0, 1.0, 0.0 -
    1.0, -1.0, 0.0
  ];

  var triangleVertexPositionBuffer = gl.createBuffer();
  // communicate cpu to gpu
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
  gl.bufferDate(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

  var triangleColors = [
    1.0, 0.0, 0.0, 1.0,
    0.0, 1.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 1.0
  ];

  var triangleVertexColorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);
  gl.bufferDate(gl.ARRAY_BUFFER, new Float32Array(triangleColors), gl.STATIC_DRAW);
}