using System.Collections.Generic;
using System.Threading.Tasks;
using datingapp.api.Models;

namespace datingapp.api.Data
{
    public interface IDatingRepository
    {
        void Add<T>(T item) where T : class;
        void Delete<T>(T item) where T: class;
        Task<bool> SaveAll();
        Task<List<User>> GetUsers();
        Task<User> GetUser(int id);
    }
}