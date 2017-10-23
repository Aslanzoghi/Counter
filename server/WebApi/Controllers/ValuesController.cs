using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        int value = 0;

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(value);
        }

        // GET api/values
        [HttpPut]
        public IActionResult Minus()
        {
            value--;
            return Ok(value);
        }

        // GET api/values
        [HttpPut]
        public IActionResult Add()
        {
            value++;
            return Ok(value);
        }

    }
}
