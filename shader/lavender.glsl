// Author: @patriciogv
// Title: CellularNoise

#ifdef GL_ES
precision mediump float;
#endif

vec2 random2( vec2 p ) {
    return fract(sin(vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3))))*43758.5453);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;
    vec3 color = vec3(.0);

    // Scale
    st *= 3.;

    // Tile the space
    vec2 i_st = floor(st);
    vec2 f_st = fract(st);

    float m_dist = 1.;  // minimun distance

    for (int y= -1; y <= 1; y++) {
        for (int x= -1; x <= 1; x++) {
            // Neighbor place in the grid
            vec2 neighbor = vec2(float(x),float(y));

            // Random position from current + neighbor place in the grid
            vec2 point = random2(i_st + neighbor);

			// Animate the point
            point = 0.5 + 0.5*sin(u_time + 6.2831*point);

			// Vector between the pixel and the point
            vec2 diff = neighbor + point - f_st;

            // Distance to the point
            float dist = length(diff);

            // Keep the closer distance
            m_dist = min(m_dist, dist);
        }
    }

    // Draw the min distance (distance field)
    color += m_dist;

    // Draw cell center
    color += 1.-step(.02, m_dist);

    // Show isolines
    // color -= step(.7,abs(sin(27.0*m_dist)))*.2;

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
    vec3 hcol = vec3(0.3*r,0.1*s,0.5*s)*r*3.0;

    vec3 col = mix( color, hcol, smoothstep( -0.1, 0.05, d-r) );

    gl_FragColor = vec4(col,1.0);
}
