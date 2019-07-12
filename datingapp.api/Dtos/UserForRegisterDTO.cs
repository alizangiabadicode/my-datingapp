using System.ComponentModel.DataAnnotations;

namespace datingapp.api.Dtos
{
    public class UserForRegisterDTO
    {
        [Required]
        public string UserName{get;set;}

        [Required]
        [StringLength(8,MinimumLength = 4,ErrorMessage = "password is between 4 to 8 characters")]
        public string Password{get;set;}
    }
}