using Microsoft.EntityFrameworkCore;

namespace iPortfolio.Server.Data
{
    public class ConnectContext : DbContext
    {
        public ConnectContext(DbContextOptions<ConnectContext> options) : base(options)
        {
        }

        public DbSet<Users> User { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
            .UseSqlServer("Data Source=.;Initial Catalog=iPortfolio;Integrated Security=True");
                    
        }
    }
}
