using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Services
{
    public class ValueService : IValueService
    {
        int value;
        public int Get()
        {
            return value;
        }

        public void Minus()
        {
            value--;
        }

        public void Plus()
        {
            value++;
        }
    }
}
