using CuestionariosEntidades;
using CuestionariosRN;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace CuestionariosAPI.Controllers
{
    [Route("api/[controller]")]
    public class TestController : ControllerBase
    {
            public TestController()
            {

            }   

            [HttpGet]
            public async Task<ActionResult<List<Test>>> GetTest()
            {
                TestRN t = new TestRN();
                return t.GetTest();
            }
        
    }
}
