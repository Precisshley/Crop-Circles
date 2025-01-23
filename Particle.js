class Particle {
  constructor(size, x, y) {
    this.size = size;
    this.position = createVector(x, y);
    this.angle = 0; // Current angle
    this.targetAngle = 0;
    this.rotationSpeedTilt = 0.1; // Falling speed
    this.rotationSpeedReturn = 0.03; //Rising speed
    this.isTilting = false; // Flag to track if actively tilting
    this.mouseDirection = 0;
  }

  // Update rotation + other behaviors
  update() {
    // Distance between mouse and particle
    let d = dist(mouseX, mouseY, this.position.x, this.position.y);

    // If mouse is close enough to particle for tilt
    if (d < this.size * 3 && !this.isTilting) { // Adjust the multiplier to change hover range
      
      // Determine the direction to tilt
      this.mouseDirection = mouseX - this.position.x;
      
      // If the mouse is on the right, tilt left; if on the left, tilt right
      this.targetAngle = (this.mouseDirection > 0) ? -HALF_PI : HALF_PI;  // 90 degrees

      this.isTilting = true;
    }

    // Transition back to normal gradually
    if (this.isTilting) {
      // Move towards the target angle
      this.angle = lerp(this.angle, this.targetAngle, this.rotationSpeedTilt);

      // If the particle is close enough to the target angle, stop tilting and start returning to normal
      if (abs(this.angle - this.targetAngle) < 0.01) {
        this.isTilting = false;
        this.targetAngle = 0;
      }
    } else {
      this.angle = lerp(this.angle, 0, this.rotationSpeedReturn); // Return to normal
    }
  }

  // Show the particle (draw the square)
  show() {
    push(); // Save
    translate(this.position.x, this.position.y+15); // Move origin to particle position
    rotate(this.angle);
    fill(map(Math.abs(this.angle),0,HALF_PI,250,150),
         map(Math.abs(this.angle),0,HALF_PI,200,175), 0);
    translate(0, -12);
    rectMode(CENTER);
    rect(0, 0, this.size-5, this.size+20);
    pop(); // Restore
  }

}
