#version 330 core
layout (triangles) in;
layout (line_strip, max_vertices = 6) out;

in VS_OUT {
    vec3 normal;
} gs_in[];

const float MAGNITUDE = 0.2;
out vec3 outColor;

uniform mat4 projection;

void GenerateLine(int index, vec3 color)
{
    gl_Position = projection * gl_in[index].gl_Position;
    EmitVertex();
    gl_Position = projection * (gl_in[index].gl_Position + vec4(gs_in[index].normal, 0.0) * MAGNITUDE);
    EmitVertex();
	outColor = color;
    EndPrimitive();
}

void main()
{
    GenerateLine(0, vec3(1.0, 0.0, 0.0)); // first vertex normal
    GenerateLine(1, vec3(0.0, 1.0, 0.0)); // second vertex normal
    GenerateLine(2, vec3(0.0, 0.0, 1.0)); // third vertex normal
}