using CuestionariosEntidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosAD
{
    public class TestAD
    {
        public List<Test> GetTest()
        {
            List<Test> a = new List<Test>();
            Test test = new Test();
            test.Id = 6;
            test.LastName = "panchito";
            a.Add(test);
            return a;
        }

    }
}
