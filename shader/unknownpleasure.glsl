#ifdef GL_ES
precision mediump float;
#endif

vec2 Wposition;
void main() {
	vec2 st = gl_FragCoord.xy/u_resolution;

    if( st.x < 0.55 && st.x > 0.45) {
        float freq = sin(u_time/2.0);
        if (st.x > 0.5) {
            freq = sin(-u_time/2.0);
        }
        //freq = smoothstep(freq, -0.05, 0.05);
        float y = st.x * freq;
        y += st.y;

        Wposition = vec2(st.x, y);
    } else {
        Wposition = vec2(st.x, st.y);
    }

    float modValue = fract(sin(u_time/10.0));
    float xLine = mod(Wposition.y, modValue);

    // bottom-left
    vec2 bl = step(vec2(0.05),st);
    float pct = bl.x * bl.y;
    // top-right
    vec2 tr = step(vec2(0.05),1.0-st);
    pct *= tr.x * tr.y;

    float x = xLine * pct;
    vec3 color = vec3(x);

    color = (5.0+tan(u_time/5.0)-x)*color;

	gl_FragColor = vec4(color,1.0);
}
