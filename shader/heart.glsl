#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.14159265358979323846

vec2 rotate2D (vec2 _st, float _angle) {
    _st -= 0.5;
    _st =  mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle)) * _st;
    _st += 0.5;
    return _st;
}

vec2 tile (vec2 _st, float _zoom) {
    _st *= _zoom;
    return fract(_st);
}

vec2 rotateTilePattern(vec2 _st){

    //  Scale the coordinate system by 2x2
    _st *= 1.6;

    //  Give each cell an index number
    //  according to its position
    float index = 0.0;
    index += step(1., mod(_st.x,3.0));
    index += step(1., mod(_st.y,3.0))*2.0;

    _st = fract(_st);

    // Rotate each cell according to the index
    if(index == 1.0){
        _st = rotate2D(_st,PI*0.75);
    } else if(index == 2.0){
        _st = rotate2D(_st,PI*-0.25);
    } else if(index == 3.0){
        _st = rotate2D(_st,PI*0.25);
    } else {
      _st = rotate2D(_st,PI*-0.75);
    }

    return _st;
}

void main() {
   vec2 st = gl_FragCoord.xy/u_resolution;

   st = tile( st - fract(sin(u_time)/50.0)*0.2, 1.0 - fract(sin(u_time)/50.0)*3.8);
   st = rotateTilePattern(st + fract(sin(u_time)/10.0)*16.0);
   vec2 p = 2.0*st - vec2(1.0);
   p.y -= 0.25;

   // background color
   float tt = mod(iGlobalTime,13.0)/4.0;
   vec3 bcol = vec3(0.0);

   // animate
   p *= vec2(0.1,1.1) + tt*vec2(1.0,-1.0);


   // shape
   float a = atan(p.x,p.y)/PI;
   float r = length(p);
   float h = abs(a);
   float d = (13.0*h - 22.0*h*h + 10.0*h*h*h)/(6.0-5.0*h);

   // color
   float s = 1.0-0.5*clamp(r/d,0.0,1.0);
   s = 0.75 + 0.75*p.x;
   s *= 1.0-0.25*r;
   s = 0.5 + 0.6*s;
   s *= 0.9+0.5*pow( 1.0-clamp(r/d, 0.0, 1.0 ), 0.001 );
   //
   //vec3 hcol = vec3(0.3*r,0.1*s,0.5*s)*r*3.0;
   vec3 hcol = vec3(1.0)*s;

   vec3 col = mix( bcol, hcol, smoothstep( -0.1, 0.05, d-r) );

   gl_FragColor = vec4(col,1.0);
}
