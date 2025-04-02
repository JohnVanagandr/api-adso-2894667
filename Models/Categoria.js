import connection from "../utils/db.js";

class Categoria{
    /**
     * Método para obtener los registros de la base de datos
     * @returns {Array} Listado de las categorias en un arreglo
     */
    async getAll(){
        try {
            const [rows] = await connection.query("SELECT * FROM categorias");
            return rows;    
        } catch (error) {
            throw new Error("Error al obtener las categorías");
        }        
    }

    async create(nombre, descripcion) {
        try {            
            const [result] = await connection.query("INSERT INTO categorias (nombre, descripcion) VALUES (?,?)", [nombre, descripcion]);
        return {id: result.id, nombre, descripcion };
        } catch (error) {
          throw new Error("Error al crear la categpría");  
        }
    }

    async update(nombre, descripcion,id) {
        try {
            console.log("Desde la clase ",nombre, descripcion, id);   
            const [result] = await connection.query(`UPDATE categorias SET nombre = ? ,descripcion = ?  WHERE id = ?`, [nombre, descripcion, id]);
            if(result.affectedRows === 0){
                throw new Error("Categoría no encontrada"); 
            }
            return { id, nombre, descripcion}            

        } catch (error) {
            console.log(error.message);
            
            throw new Error("Error al crear la categoría");  
        }
    }
    async patch(id,nombre,descripcion,campos)
    {
        try {
        let sql = "UPDATE categorias SET ";
        for (let cont = 0; cont < Object.keys(campos).length; cont++)
        {
            let value = Object.keys(campos)[cont];
            sql += `${value} = '${campos[value]}'`;
            cont == Object.keys(campos).length-1 ? sql += "" : sql += ",";
        }
        sql += ` WHERE id= ${id}`;
        const [result] = await connection.query(sql);
        if(result.affectedRows === 0){
            throw new Error("Categoría no encontrada"); 
        }
        return { id,nombre,descripcion} 

        } catch (error) 
        {
            console.log(error.message);
            throw new Error("Error al generar el patch");
        }
    }
}

export default Categoria;