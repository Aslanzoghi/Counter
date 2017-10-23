using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApi.Models
{
    public partial class CounterStorageContext : DbContext
    {
        public virtual DbSet<Counter> Counter { get; set; }

        public CounterStorageContext(DbContextOptions<CounterStorageContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Counter>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(50);

                entity.Property(e => e.Value).HasColumnName("value");
            });
        }
    }
}
