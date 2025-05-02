CREATE TABLE IF NOT EXISTS eventos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATE NOT NULL,
  razon VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS personas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255),
  apellido VARCHAR(255),
  dpi VARCHAR(20),
  telefono VARCHAR(20),
  direccion TEXT,
  evento_id INT,
  FOREIGN KEY (evento_id) REFERENCES eventos(id)
);

INSERT INTO eventos (fecha, razon) VALUES
('2025-07-01', 'Simulacro de seguridad'),
('2025-08-01', 'Entrega de víveres');

INSERT INTO personas (nombre, apellido, dpi, telefono, direccion, evento_id) VALUES
('Juan', 'Pérez', '1234567890101', '12345678', 'Zona 1', 1),
('Ana', 'López', '9876543210102', '87654321', 'Zona 2', 2);
