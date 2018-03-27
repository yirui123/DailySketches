#ifdef GL_ES
precision mediump float;
#endif

// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;

float circle(in vec2 _st, in float _radius){
    vec2 dist = _st - vec2(0.5);
    vec2 dist = distance(_st, vec2(0.5));
	  return smoothstep( dist.x, _radius, ( _radius + 0.03 ) );
}

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution;
  vec3 color = vec3(0.0);
  float circ = 0.0;
  for(int i = 0 ; i < 6 ; i++){
    circ = circle( st, 0.05 * float(i) );
  }
  color = vec3(pow(circ,6.0));
  gl_FragColor = vec4( 1.-color, 1.0);
}
