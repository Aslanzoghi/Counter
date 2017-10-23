using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Services
{
    public class Repository : IRepository
    {
        CounterStorageContext _context;
        
        public Repository(CounterStorageContext context)
        {
            _context = context;
        }

        public DbContext Context => _context;

        public List<Counter> List()
        {
            return _context.Counter.ToList();
        }

        public void Save(string name, int value)
        {
            var counter = _context.Counter.FirstOrDefault(item => item.Name == name);
            if (counter == null)
            {
                counter = new Counter
                {
                    Name = name,
                    Value = value
                };
                _context.Counter.Add(counter);
            }
            else
            {
                counter.Value = value;
            }
        }
    }
}
