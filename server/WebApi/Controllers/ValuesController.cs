using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApi.Services;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        int value = 0;
        IValueService _service;
        public ValuesController(IValueService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_service.Get() );
        }

        // GET api/values
        [HttpGet("minus")]
        public IActionResult Minus()
        {
            _service.Minus();
            return Ok(_service.Get());
        }

        // GET api/values
        [HttpGet("plus")]
        public IActionResult Plus()
        {
            _service.Plus();
            return Ok(_service.Get());
        }

    }
}
