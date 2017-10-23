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
        IValueStorageService _storage;
        public ValuesController(IValueService service, IValueStorageService storage)
        {
            _service = service;
            _storage = storage;
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

        [HttpPost("save/{name}")]
        public IActionResult Save(string name)
        {
            _storage.Save(name);
            return Ok();
        }

        [HttpGet("list")]
        public IActionResult list()
        {
           
            return Ok(_storage.List());
        }
    }
}
