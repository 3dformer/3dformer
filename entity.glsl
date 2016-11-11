[vertex]
precision mediump float;

attribute vec3 position;
attribute vec2 uv;

void main() {
  gl_Position = vec4(position, 1);
}

[fragment]
precision mediump float;

void main() {
  gl_FragColor = vec4(1.0);
}
