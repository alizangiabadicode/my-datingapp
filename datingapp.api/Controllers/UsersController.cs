using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using datingapp.api.Data;
using datingapp.api.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace datingapp.api.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IDatingRepository rep;
        private readonly IMapper mapper;
        public UsersController(IDatingRepository rep, IMapper mapper)
        {
            this.mapper = mapper;
            this.rep = rep;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await rep.GetUsers();

            var mappedUsers = mapper.Map<IEnumerable<UserForLIstDTO>>(users);

            return Ok(mappedUsers);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await rep.GetUser(id);

            var mappedUser = mapper.Map<UserForDetailDTO>(user);

            return Ok(mappedUser);
        }
    }
}