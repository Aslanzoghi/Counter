﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public interface IRepository
    {
        DbContext Context { get; }
        void Save(string name, int value);

        List<Counter> List();
    }
}
