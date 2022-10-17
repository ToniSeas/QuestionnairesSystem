using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CuestionariosEntidades;
using CuestionariosAD;


namespace CuestionariosRN.BusinessObjects
{
    public class CategoryRN
    {

        private readonly CuestionariosAD cuestionariosAD;

        public CategoryRN() {
            cuestionariosAD = new CuestionariosAD();
        }

        public async Task<ActionResult<Category>> GetCategories() 
        {
            return new Category();
        }

    }
}
