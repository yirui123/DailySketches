#ifdef GL_ES
precision mediump float;
#endif

vec2 Wposition;

// 2D Random
float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}


float noise (in vec2 st) {

    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners porcentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

// YUV to RGB matrix
mat3 yuv2rgb = mat3(1.0, 0.0, 1.13983,
                    1.0, -0.39465, -0.58060,
                    1.0, 2.03211, 0.0);

// RGB to YUV matrix
mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722,
                    -0.09991, -0.33609, 0.43600,
                    0.615, -0.5586, -0.05639);

float circle(in vec2 _st, in float _radius){
    vec2 dist = _st-vec2(0.5);
	return -1.-smoothstep(_radius-(_radius*0.2),
                         _radius+(_radius*0.2),
                         dot(dist,dist)*10.0);
}



void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;

	st *= 1.0;      // Scale up the space by 3
	 st = fract(st);

    if( st.y < 0.502 && st.y > 0.498) {
        float freq = sin(u_time)*2.0;
        if (st.y > 0.5) {
            freq = sin(1.0-u_time);
        }
        //freq = smoothstep(freq, -0.05, 0.05);
        float x = st.y * freq;
        x -= st.y*0.2;

        Wposition = vec2(x, st.y);
    } else {
        Wposition = vec2(st);
    }

    float modValue = fract(sin(u_time)*0.01);
    float xLine = mod(Wposition.x, modValue);

    //bottom-left
    // vec2 bl = step(vec2(0.05),st);
    // float pct = bl.x * bl.y;
    // top-right
    // vec2 tr = step(vec2(0.05),1.0-st);
    // pct *= tr.x * tr.y;

    // float x = xLine * pct*0.5;
		float x = xLine;

    vec3 lColor = vec3(x,0.5,0.5);
		vec3 outcColor = vec3(circle(st,0.6));
		vec3 incColor = vec3(circle(st,0.4));
		vec2 pos = vec2(st*5.0);
		float n = noise(pos);
		vec3 ccColor = vec3(n*0.5);

    vec3 color = (4.0+sin(u_time/10.0)-x)*lColor + outcColor + ccColor + incColor;

		color = vec3(color);

		gl_FragColor = vec4(color,1.0);
}
