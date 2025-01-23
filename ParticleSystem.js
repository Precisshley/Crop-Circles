class ParticleSystem {
  constructor(x, y) {
    this.origin = createVector(x, y);
    this.particles = [];
    this.grid = [];
    this.size = 11; // Particle size
    this.spacing = 10; // Spacing between particles

    // Calculate grid cell number based on canvas
    this.lengthX = Math.floor(width / (this.spacing));  // number of columns
    this.lengthY = Math.floor(height / (this.spacing)); // number of rows
    this.createGrid();

    this.grid.forEach(particleRow => {
      particleRow.forEach(particle => {
        const x = (particle.pos.x * (this.spacing));
        const y = (particle.pos.y * (this.spacing));
        const position = createVector(x, y);
        this.particles.push(new Particle(this.size, position.x, position.y));
      });
    });
  }

  createGrid() {
    this.grid = Array.from({ length: this.lengthY }, (_, rowIndex) => {
      return Array.from({ length: this.lengthX }, (_, colIndex) => {
        // Offset every other row (odd rows)
        const xOffset = (rowIndex % 2 === 0) ? 0 : 0.5;
        return {
          pos: { 
            x: colIndex + xOffset,
            y: rowIndex
          }
        };
      });
    });
  }

  run() {
    // Update and render all particles
    for (let particle of this.particles) {
      particle.update();
      particle.show();
    }
  }
}
