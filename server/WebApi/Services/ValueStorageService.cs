using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public class ValueStorageService : IValueStorageService
    {
        IValueService _valueService;
        IRepository _repository;
        public ValueStorageService(IValueService valueService, IRepository repository)
        {
            _valueService = valueService;
            _repository = repository;
        }

        public void Save(string name)
        {
            using (new UnitOfWork(_repository))
            {
                _repository.Save(name, _valueService.Get());
            }
        }

        public List<Counter> List()
        {
                return _repository.List();
        }
    }
}
