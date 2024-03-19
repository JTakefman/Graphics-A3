// ==========================================================================
// $Id: Attributes.js,v 1.3 2019/02/27 22:26:52 jlang Exp $
// Attributes class to be used for shapes to create Float32Arrays 
// ==========================================================================
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
// $Log: Attributes.js,v $
// Revision 1.3  2019/02/27 22:26:52  jlang
// Complete example with element-based instanced rendering
//
// Revision 1.2  2019/02/27 03:10:37  jlang
// Element-based drawing
//
// Revision 1.1  2019/02/19 22:17:06  jlang
// Intial (incomplete) boxes laboratory.
//
// Revision 1.2  2019/02/14 0
// ==========================================================================

// Constructor
function Attributes(nColors,nTfms, ... minmax) { 
  this._minP = glMatrix.vec3.fromValues(-1.0,-1.0,-1.0);
  this._maxP = glMatrix.vec3.fromValues(1.0,1.0,1.0);	
  if ( minmax.length >= 1 ) {
	  if ( minmax[0] instanceof Float32Array ) {
		glMatrix.vec3.copy(this._minP, minmax[0]);
	  }
	  if ( minmax.length >= 2 && minmax[1] instanceof Float32Array ) {
		glMatrix.vec3.copy(this._maxP, minmax[1]);
	  }
  }
  this.colors = null; 
  this.tfms = null;
  this.updateColors(nColors);
  this.updateTransforms(nTfms);
}


// Call to change colors
Attributes.prototype.updateColors = function( nColors ) {
  // create a jet color map
  this.colors = new Float32Array(3*nColors);  	

  let step = nColors/4;
  if ( nColors%8 != 0 ) {
      step = 2*Math.ceil(nColors/8.0);
  }
  let step2 = step/2;


  for (let i = 0; i < step2; i++ ) {
    this.colors[3*i] = 0.0;
    this.colors[3*i+1] = 0.0;
    this.colors[3*i+2] = 0.5 + (i*0.5)/step2;
  }
  for (let i = step2; i < step+step2; i++ ) {
    this.colors[3*i] = 0.0;
    this.colors[3*i+1] = (i-step2)/step;
    this.colors[3*i+2] = 1.0;
  }
  for (let i = step+step2; i<2*step+step2; i++ ) {
    this.colors[3*i] = (i-step-step2)/step;
    this.colors[3*i+1] = 1.0;
    this.colors[3*i+2] = (2.0*step+step2-i)/step;
  }
  for (let i = 2*step+step2; i<3*step+step2; i++ ) {
    this.colors[3*i] = 1.0;
    this.colors[3*i+1] = (3.0*step+step2-i)/step;
    this.colors[3*i+2] = 0.0;
  }
  for (let i = 3*step+step2; i<nColors; i++ ) {
    this.colors[3*i] = (nColors-i)/step + 0.5;
    this.colors[3*i+1] = 0.0;
    this.colors[3*i+2] = 0.0;
  }
  return;
}

// Call to change viewing volume
// minmax must be two Float32Array as created by gl.Matrix.vec3 
// specifying the minimum and maximum of the volume
Attributes.prototype.updateTransforms = function( nTfms, ... minmax) { 
  
  /*
  if ( minmax.length >= 1 ) {
	  if ( minmax[0] instanceof Float32Array ) {
		glMatrix.vec3.copy(this._minP, minmax[0]);
	  }
	  if ( minmax.length >= 2 && minmax[1] instanceof Float32Array ) {
		glMatrix.vec3.copy(this._maxP, minmax[1]);
	  }
  }*/
  if ( this.tfms == null || nTfms != this.tfms.length / 16 ) {
	this.tfms = new Float32Array(16*nTfms);
  }
  /*
  let volume = glMatrix.vec3.create();
  glMatrix.vec3.subtract(volume,this._maxP,this._minP);*/
  let randVec = glMatrix.vec3.create();

  for (let i=0; i<nTfms; i++) {
    let m4 = glMatrix.mat4.create();
    /*
    // make a unit vector
    do {
      glMatrix.vec3.set(randVec, 2.0*Math.random()-1.0,
			2.0*Math.random()-1.0,
			2.0*Math.random()-1.0);
      len2 = glMatrix.vec3.sqrLen(randVec); 
    } while ( len2 > 1.0 );
    // Now normalize
    //glMatrix.vec3.scale( randVec, randVec, 1.0/Math.sqrt(len2));
    // random angle -pi .. pi
    let angle = Math.PI * ( 2.0 * Math.random() -  1.0 );
    // Set the rotation matrix*/
      //glMatrix.mat4.fromRotation(m4, angle, randVec );
    if (i < 12) {
      glMatrix.mat4.scale(m4, m4, glMatrix.vec3.fromValues(1.0/2.0, 1.0/2.0, 1.0/2.0))
      glMatrix.mat4.rotate(m4,m4, -Math.PI/2, glMatrix.vec3.fromValues(1.0,0.0, 0.0));
      // Add a random vector scaled upto the viewing volume
      if ((i%6) > 2) {
        randVec[0] = -10+(i%6)*4.5;
      }
      else {
        randVec[0] = -25+(i%6)*4.5;
      }
      if (i < 6) {
        randVec[1] = -4;
      }
      else {
        randVec[1] = 6;
      }
      randVec[2] = 0;
      glMatrix.mat4.translate( m4, m4, randVec );
      if (i < 6) {
        glMatrix.mat4.rotate(m4,m4, -2*Math.PI/2, glMatrix.vec3.fromValues(0.0,0.0, 1.0));
      }
    // Copy the matrix into the float buffer for transforms
    }
    else {
      glMatrix.mat4.scale(m4, m4, glMatrix.vec3.fromValues(1.0/2.0, 1.0/2.0, 1.0/2.0));
      glMatrix.mat4.rotate(m4,m4, -Math.PI/2, glMatrix.vec3.fromValues(1.0,0.0, 0.0));
      glMatrix.mat4.rotate(m4,m4, -Math.PI/2, glMatrix.vec3.fromValues(0.0,0.0, 1.0));
      // Add a random vector scaled upto the viewing volume
      if ( (i%6) > 2) {
        randVec[0] = 0 - (i%6)*4.5;
      }
      else {
        randVec[0] = 20 - (i%6)*4.5;
      }

      if (i < 18) {
        randVec[1] = -10;
      }
      else {
        randVec[1] = -2;
      }
      
      //randVec[1] = -20;
      randVec[2] = 0;
      glMatrix.mat4.translate( m4, m4, randVec );
      if (i < 18) {
        glMatrix.mat4.rotate(m4,m4, -2*Math.PI/2, glMatrix.vec3.fromValues(0.0,0.0, 1.0));
      }
    // Copy the matrix into the float buffer for transforms
    }
  console.log("Matrix: " + i + "\n");
	for ( let j=0; j<16; j++) {
    console.log(j + ": " + m4[j]);
	  this.tfms[i*16+j] = m4[j];
    if ((j+1)%4 == 0 && j > 0) {
      console.log("\n");
    }
	}
  }
  let testm4 = glMatrix.mat4.create();
  for ( let j=0; j<16; j++) {
    console.log(j + ": " + testm4[j]);
	  this.tfms[nTfms*16+j] = testm4[j];
    if ((j+1)%4 == 0 && j > 0) {
      console.log("\n");
    }
	}
  return;
}
