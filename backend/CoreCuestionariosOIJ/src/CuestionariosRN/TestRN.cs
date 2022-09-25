using CuestionariosAD;
using CuestionariosEntidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosRN
{
    public class TestRN
    {
        public List<Test> GetTest()
        {
            TestAD testAD = new TestAD();
            return testAD.GetTest();
        }

    }
}
