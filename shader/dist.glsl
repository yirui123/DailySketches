#ifdef GL_ES
precision mediump float;
#endif

// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;
float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution;
  float pct = 0.0;

  pct = distance(st, vec2(0.5));

  float pct0 = smoothstep(pct, 0.0, 0.03);
  float pct1 = smoothstep(pct, 0.1, 0.13);
  float pct2 = smoothstep(pct, 0.2, 0.23);

  vec2 fpos = fract(st / 0.5);

  vec3 color = vec3(vec2(fpos), pct0 * pct1 * pct2);

  gl_FragColor = vec4( color, 1.0);
}
