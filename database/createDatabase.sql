/*
	Crear base de datos y tablas.
	Autor: Heiner Monge
	Fecha creacion: 25 de septiembre 2022
	Modificiaciones: 
		08 de agosto 2022: Refactorización de algunas tablas.
		31 de agosto 2022: Modifica la llave primaria de los tipos de pregunta para facilitar la identificación de los mismos.
*/

USE master
GO

BEGIN TRY
	PRINT('Verificando si la base de datos ya existe...')
	DROP DATABASE cuestionarios
	PRINT('Base de datos preexistente eliminada!')
END TRY
BEGIN CATCH
	PRINT('La base de datos no existía. Saltando paso de borrar...')
END CATCH

PRINT('Creando la base de datos...')
CREATE DATABASE cuestionarios
GO
PRINT('Base de datos creada!')

BEGIN TRY
	PRINT('Poblando la base de datos con las tablas...')
	USE cuestionarios
	BEGIN TRANSACTION
		-- tipoCuestionario
		CREATE TABLE tb_tipo_Cuestionario
			(id INT IDENTITY(1, 1) PRIMARY KEY
			,nombre VARCHAR(150))

		-- cuestionario
		CREATE TABLE tb_cuestionario
			(id INT IDENTITY(1, 1) PRIMARY KEY
			,nombre NVARCHAR(150) NOT NULL
			,activo BIT NOT NULL DEFAULT 1
			,vencimiento DATE NOT NULL
			,descripcion NVARCHAR(500) NOT NULL
			,idTipoCuestionario INT NOT NULL
			,fechaCreacion DATE DEFAULT GETDATE()
			, FOREIGN KEY (idTipoCuestionario) REFERENCES tb_tipo_Cuestionario (id))

		-- historico cuestionario
		CREATE TABLE tb_historico_Cuestionario
			(id INT IDENTITY (1, 1) PRIMARY KEY
			,idCuestionario INT NOT NULL
			,fechaInicio DATE DEFAULT GETDATE()
			,fechaFinal DATE NOT NULL
			, FOREIGN KEY (idCuestionario) REFERENCES tb_cuestionario (id))

		-- revisaCuestionario
		CREATE TABLE tb_revisa_Cuestionario
			(idUsuario INT NOT NULL
			,idCuestionario INT NOT NULL
			,eliminado BIT NOT NULL DEFAULT 0
			,FOREIGN KEY (idCuestionario) REFERENCES tb_cuestionario (id))

		-- cuestionario_usuarios
		CREATE TABLE tb_cuestionario_usuario
			(idCuestionario INT NOT NULL
			,idUsuario INT NOT NULL
			,eliminado BIT NOT NULL DEFAULT 0
			,FOREIGN KEY (idCuestionario) REFERENCES tb_cuestionario (id)) 

		-- tipoPregunta
		CREATE TABLE tb_tipo_pregunta
			(id VARCHAR(2) PRIMARY KEY
			,nombre NVARCHAR(150) UNIQUE)

		-- Categoría pregunta
		CREATE TABLE tb_categoria_pregunta
			(id INT IDENTITY(1, 1) PRIMARY KEY
			,nombre NVARCHAR(150))
	
		-- Categoría pregunta
		CREATE TABLE tb_subcategoria_pregunta
			(id INT IDENTITY(1, 1) PRIMARY KEY
			,nombre NVARCHAR(150)
			,idCategoria INT NOT NULL
			,FOREIGN KEY (idCategoria) REFERENCES tb_categoria_pregunta (id))

		-- pregunta
		CREATE TABLE tb_pregunta
			(id INT IDENTITY(1, 1) PRIMARY KEY
			,enunciado NVARCHAR(180) NOT NULL
			,etiqueta NVARCHAR(180) NOT NULL
			,posicion INT NOT NULL
			,idCategoria INT NOT NULL
			,idSubcategoria INT NOT NULL
			,idCuestionario INT NOT NULL
			,idTipo VARCHAR(2) NOT NULL
			,opcional BIT NOT NULL DEFAULT 0
			,FOREIGN KEY (idCategoria) REFERENCES tb_categoria_pregunta (id)
			,FOREIGN KEY (idSubcategoria) REFERENCES tb_subcategoria_pregunta (id)
			,FOREIGN KEY (idCuestionario) REFERENCES tb_cuestionario (id)
			,FOREIGN KEY (idTipo) REFERENCES tb_tipo_pregunta (id))

		-- Opcion

		CREATE TABLE tb_opcion
			(id INT IDENTITY(1, 1) PRIMARY KEY
			,opcion NVARCHAR(180) NOT NULL
			,idPregunta INT NULL --Puede que esta opción sea estática por lo que no tiene una ID de pregunta como tal.
			,idTipoPregunta VARCHAR(2) NOT NULL --Es importante espeficicar el tipo de pregunta al que pertenece esta opción.
			,FOREIGN KEY (idPregunta) REFERENCES tb_pregunta (id)
			,FOREIGN KEY (idTipoPregunta) REFERENCES tb_tipo_pregunta (id))

		-- Respuesta

		CREATE TABLE tb_respuesta
			(id INT IDENTITY(1, 1) PRIMARY KEY
			,fecha DATETIME NOT NULL DEFAULT GETDATE()
			,idPregunta INT NOT NULL
			,respuesta NVARCHAR(500) NULL
			,FOREIGN KEY (idPregunta) REFERENCES tb_pregunta (id))
	
		-- Respuesta_opción

		CREATE TABLE tb_respuesta_opcion
			(idRespuesta INT NOT NULL
			,idOpcion INT NOT NULL
			,FOREIGN KEY (idOpcion) REFERENCES tb_Opcion (id)
			,FOREIGN KEY (idRespuesta) REFERENCES tb_respuesta (id))


		/*
			Esta sección se encarga de llenar los valores estáticos para las tablas que lo necesiten.
		*/
		PRINT('Tablas creadas!')
		PRINT('Poblando los datos estáticos de la base de datos...')
		-- tipos de preguntas
		INSERT INTO tb_tipo_pregunta
			(id, nombre)
		VALUES
			('su', 'Selección Única')
			,('sm', 'Selección Múltiple')
			,('rl', 'Respuesta Larga')
			,('nu', 'Numérica')
			,('es', 'Escala')
			,('vf', 'Verdadero o Falso')

		-- Opciones estáticas para preguntas
		INSERT INTO tb_opcion
			([opcion]
			,[idTipoPregunta]) 
		VALUES
			('Muy malo', 'es')
			,('Malo', 'es')
			,('Regular', 'es')
			,('Bueno', 'es')
			,('Muy bueno', 'es')
	COMMIT
	PRINT('Base de datos lista!')
END TRY
BEGIN CATCH
	ROLLBACK
	PRINT ERROR_MESSAGE()
END CATCH
