"use client";

import { useEffect, useRef } from "react";

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.0,1.0);}`;

const FRAG = `precision mediump float;
uniform float t;
uniform vec2 r;
uniform vec2 m;

void main(){
  vec2 uv=gl_FragCoord.xy/r;
  float s=t*0.2;

  vec3 c1=vec3(0.06,0.08,0.18);
  vec3 c2=vec3(0.12,0.06,0.28);
  vec3 c3=vec3(0.04,0.16,0.28);
  vec3 c4=vec3(0.08,0.04,0.22);

  float f1=sin(uv.x*2.5+s)*cos(uv.y*1.8+s*0.7)*0.5+0.5;
  float f2=cos(uv.x*1.8-s*0.5)*sin(uv.y*2.5+s*0.3)*0.5+0.5;
  float f3=sin((uv.x+uv.y)*1.5+s*0.4)*0.5+0.5;

  float md=length(uv-m)*2.0;
  float mi=smoothstep(1.2,0.0,md)*0.15;

  vec3 c=mix(c1,c2,f1);
  c=mix(c,c3,f2*0.5);
  c=mix(c,c4,f3*0.3);
  c+=mi*vec3(0.10,0.14,0.30);

  float v=1.0-length(uv-0.5)*0.25;
  c*=v;

  gl_FragColor=vec4(c,1.0);
}`;

export default function ShaderGradient({ className = "" }: { className?: string }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;

        const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
        if (!gl) return;

        function mkShader(type: number, src: string) {
            const s = gl!.createShader(type)!;
            gl!.shaderSource(s, src);
            gl!.compileShader(s);
            return s;
        }

        const prog = gl.createProgram()!;
        gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, VERT));
        gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, FRAG));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

        const pLoc = gl.getAttribLocation(prog, "p");
        gl.enableVertexAttribArray(pLoc);
        gl.vertexAttribPointer(pLoc, 2, gl.FLOAT, false, 0, 0);

        const uT = gl.getUniformLocation(prog, "t");
        const uR = gl.getUniformLocation(prog, "r");
        const uM = gl.getUniformLocation(prog, "m");

        let mouseX = 0.5, mouseY = 0.5;
        let rafId: number;
        let visible = true;

        function resize() {
            const dpr = Math.min(window.devicePixelRatio, 2);
            const rect = canvas!.getBoundingClientRect();
            canvas!.width = rect.width * dpr;
            canvas!.height = rect.height * dpr;
            gl!.viewport(0, 0, canvas!.width, canvas!.height);
        }

        function render(time: number) {
            if (visible) {
                gl!.uniform1f(uT, time * 0.001);
                gl!.uniform2f(uR, canvas!.width, canvas!.height);
                gl!.uniform2f(uM, mouseX, 1.0 - mouseY);
                gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
            }
            rafId = requestAnimationFrame(render);
        }

        const onMove = (e: MouseEvent) => {
            const rect = canvas!.getBoundingClientRect();
            mouseX = (e.clientX - rect.left) / rect.width;
            mouseY = (e.clientY - rect.top) / rect.height;
        };

        // Pause when not visible
        const observer = new IntersectionObserver(
            ([entry]) => { visible = entry.isIntersecting; },
            { threshold: 0.05 },
        );
        observer.observe(canvas);

        resize();
        rafId = requestAnimationFrame(render);
        window.addEventListener("resize", resize);
        document.addEventListener("mousemove", onMove, { passive: true });

        return () => {
            cancelAnimationFrame(rafId);
            observer.disconnect();
            window.removeEventListener("resize", resize);
            document.removeEventListener("mousemove", onMove);
        };
    }, []);

    return (
        <canvas
            ref={ref}
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            aria-hidden="true"
        />
    );
}
