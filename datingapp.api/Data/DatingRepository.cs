using System.Collections.Generic;
using System.Threading.Tasks;
using datingapp.api.Models;
using Microsoft.EntityFrameworkCore;

namespace datingapp.api.Data
{
    public class DatingRepository : IDatingRepository
    {
        private readonly DataContext context;
        public DatingRepository(DataContext context)
        {
            this.context = context;
        }
        public void Add<T>(T item) where T : class // niazi nis async bashe chon fqt daram add mikonm va amaln kari ba db nadaram
        {
            context.Add(item);
        }

        public void Delete<T>(T item) where T : class
        {
            context.Remove(item);
        }

        public async Task<User> GetUser(int id)
        {
            return await  context.Users
                .Include(e => e.Photos)//foeign key
                .FirstOrDefaultAsync(e => e.Id == id);
        }

        public async Task<List<User>> GetUsers()
        {
            var users =  await context.Users.Include(e => e.Photos)
            .ToListAsync();
            return users;
        }

        public async Task<bool> SaveAll()
        {
            return await context.SaveChangesAsync() > 0;// mikham bbinm taqiri dade shode ya na
        }
    }
}