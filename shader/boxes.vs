#version 300 es
// ==========================================================================
// $Id: boxes.fs,v 1.2 2019/02/27 03:10:37 jlang Exp $
// Basic colored tetrahedron rendering
// ===================================================================
// (C)opyright:
//
//   Jochen Lang
//   EECS, University of Ottawa
//   800 King Edward Ave.
//   Ottawa, On., K1N 6N5
//   Canada.
//   http://www.eecs.uottawa.ca
//
// Creator: jlang (Jochen Lang)
// Email:   jlang@eecs.uottawa.ca
// ==========================================================================
// $Log: boxes.fs,v $
// Revision 1.2  2019/02/27 03:10:37  jlang
// Element-based drawing
//
// Revision 1.1  2019/02/19 22:17:06  jlang
// Intial (incomplete) boxes laboratory.
//
// Revision 1.1  2019/02/14 02:43:09  jlang
// Solution to lab 4.
//
// ==========================================================================


uniform mat4 proj_matrix;
uniform mat4 rot_matrix;

layout (location=0) in vec4 a_vertex;
layout (location=1) in float a_color;
layout (location = 2) in mat4 model_matrix;	

out vec4 v_color;
void main() {
   // map the vertex position into normalized device coordinates
  gl_Position = proj_matrix * model_matrix * rot_matrix * a_vertex;
  // Pass on the color to the fragment shader
  // Pass on the fragment color to the frame buffer

  int temp_color = int(a_color);

  if (temp_color == 0) {
    v_color=vec4(0.25098039215, 0.18039215686, 0.09019607843, 1.0);
  }
  if (temp_color == 1) {
    v_color=vec4(0.60784313725, 0.62745098039, 0.5725490196, 1.0);
  }
  if (temp_color == 2) {
    v_color=vec4(0.58431372549, 0.32549019607, 0.18039215686, 1.0);
  }
  if (temp_color == 3) {
    v_color=vec4(0.5725490196, 0.5725490196, 0.5725490196, 1.0);
  }
  if (temp_color == 4) {
    v_color=vec4(0.6, 0.61568627451, 0.5725490196, 1.0);
  }
}
