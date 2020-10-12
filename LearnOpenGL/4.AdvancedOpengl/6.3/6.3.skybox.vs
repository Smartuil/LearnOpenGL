#version 330 core
layout (location = 0) in vec3 aPos;

out vec3 TexCoords;

uniform mat4 projection;
uniform mat4 view;

void main()
{
    TexCoords = vec3(aPos.x, -aPos.yz);
    vec4 pos = projection * view * vec4(aPos, 1.0);
    gl_Position = pos.xyww;
}  
//https://www.baidu.com/link?url=VWA8OFuLo1J-4osLJv5eKUCrcM2j8CgFPtpTJnD0SZjEUrsrp1mvpuoaZBN3YqVlcTnvq6ZcJ8hvEtPkkE8GPa&wd=&eqid=849d5758002de2a8000000035f81baf9