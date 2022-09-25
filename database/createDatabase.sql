/*
	Create dabatase and set up tables.
	Author: Heiner Monge
	Date: September 29 2022
*/


--CREATE DATABASE cuestionarios
--GO


USE cuestionarios
GO

--CREATE TABLE oficinas
CREATE TABLE oficinas
	(id INT IDENTITY(1, 1) PRIMARY KEY
	,nombre VARCHAR(255) NOT NULL
	,eliminado BIT NULL DEFAULT 0
	,usuario varchar(50) NULL
	,codigoOficina char(4) NULL
	,estado BIT NULL DEFAULT 1
	,institucion INT NULL)

CREATE TABLE usuarios
	(id INT IDENTITY(1, 1) PRIMARY KEY
	,usuario VARCHAR(50) NOT NULL UNIQUE
	,identificacion VARCHAR(25) NOT NULL
	,nombreUsuario VARCHAR(50) NULL
	,primerApellido VARCHAR(50)
	,tipoAutenticacionId INT NOT NULL DEFAULT 0
	,tipoUsuario char(1) NULL
	,correo VARCHAR(40) NULL
	,cantidadIntentosAcceso INT NULL
	,usuarioActualiza TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
	,observaciones VARCHAR(100) NULL
	,eliminado BIT NULL DEFAULT 0
	,tipoIdentificacionId INT NULL
	,institucionId INT NULL
	,oficinaId INT NOT NULL
	,activo BIT NOT NULL DEFAULT 1
	,FOREIGN KEY (oficinaId) REFERENCES oficinas (id))


	SELECT CURRENT_TIMESTAMP