#ifdef GL_ES
precision mediump float;
#endif

vec2 Wposition;
float circle(in vec2 _st, in float _radius){
    vec2 dist = _st-vec2(0.5);
	return 1.-smoothstep(_radius-(_radius*0.01),
                         _radius+(_radius*0.01),
                         dot(dist,dist)*4.0);
}

void main(){
  vec2 st = gl_FragCoord.xy/u_resolution;
  if( st.x < 0.51 && st.x > 0.49) {
      float freq = sin(u_time);
      if (st.x > 0.5) {
          freq = sin(1.0-u_time);
      }
      //freq = smoothstep(freq, -0.05, 0.05);
      float y = st.x * freq;
      y -= st.y*0.5;

      Wposition = vec2(st.x, y);
  } else {
      Wposition = vec2(st.x, st.y);
  }

  vec3 color1 = vec3(circle(st,0.5));

  vec3 color = color1


  gl_FragColor = vec4(color, 1.0);
}
