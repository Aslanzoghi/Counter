using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Services
{
    public class UnitOfWork : IDisposable
    {
        IRepository _repository;
        public UnitOfWork(IRepository repository)
        {
            _repository = repository;
        }
        public void Dispose()
        {
            _repository.Context.SaveChanges();
        }
    }
}
