#ifdef GL_ES
precision mediump float;
#endif

// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;


void main(){
  vec2 st = gl_FragCoord.xy/u_resolution;
  float pct = distance(st, vec2(0.5));
  st.x = step(st.x, 0.5);
  st.y = step(st.y, 0.5);
  vec3 color = vec3(st, 0.0);


  gl_FragColor = vec4(color, 1.0);
}
