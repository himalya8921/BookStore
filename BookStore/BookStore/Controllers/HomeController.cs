using BookStore.CustomEntities;
using BookStore.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace BookStore.Controllers
{


    [ApiController]
    [Route("[controller]/[action]")]
    public class HomeController : ControllerBase
    {
        private readonly BookStoreDbContext _bookStoreDbContext;
        private readonly IDataProtector _protector;
        //private UserManager<Users> _userManager;
        //private SignInManager<Users> _signInManager;

        public HomeController(BookStoreDbContext bookStoreDbContext,IDataProtectionProvider provider)
        {
            _bookStoreDbContext = bookStoreDbContext;
            _protector = provider.CreateProtector("mysecretkey");
        }

        [HttpPost]
        public IActionResult SubmitData(Users users)


        {
            return Ok(users);
        }


        [HttpGet]
        public IActionResult Display()
        {
            return Ok();
        }


        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<Object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            // get data from userId From the database

            var user = new Users()
            {
                UserId = 1,
                Username = "Himalya",
                Password = "Pass@123"
            };

            return new
            {
                user.UserId,
                user.Username,
                user.Password
            };
        }


    

        [HttpPost]
        public async Task<IActionResult> SignUp(Users model)
        {

            string encyptedPassword = _protector.Protect(model.Password.ToString());
            model.Password = encyptedPassword;

            try
            {
                _bookStoreDbContext.Users.Add(model);
                _bookStoreDbContext.SaveChanges();
            }
            catch(Exception e)
            {
                return BadRequest(new { message = e });
            }
            return Ok("New Visitor created");
        }


        public string getRoleType(int id)
        {
            switch (id)
            {
                case 0:
                    return "owner";
                    break;

                case 1:
                    return "visitor";
                    break;
                case 2:
                    return "coowner";
                    break;

                default:
                    return "";

            }

        }

        [HttpPost]
        //POST : /api/ApplicationUser/Login
        public async Task<IActionResult> Login(Users model)
        {
        
            var user = _bookStoreDbContext.Users.Where(x => x.Username == model.Username).FirstOrDefault();

            string unprotectedPass = _protector.Unprotect(user.Password.ToString());

            if (string.Compare(model.Password, unprotectedPass) == 0)
            {
                Console.WriteLine("hereee");

            }
            else
            {
                Console.WriteLine("hereee");
            }

            if (user != null && string.Compare(model.Password, unprotectedPass) == 0)
            {
           
                string role = this.getRoleType((int)user.Role);
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID",user.UserId.ToString()),
                        new Claim(ClaimTypes.Role,role) // from user.Role (enum)

                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("1234562122189012345")), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }

        //using authorization from angular

     
        [HttpGet]
        // [Authorize]
        public async Task<Object> GetUsers()
        {
            //Change it according to enum
            List<Users> temp = _bookStoreDbContext.Users.ToList();
            if (temp == null)
                return BadRequest(new { message = "No Co-owner Found" });
            return Ok(temp);

        }

        [HttpGet]
        public IActionResult AddOwner(long id)
        {
            try
            {
                var userObj = _bookStoreDbContext.Users.FirstOrDefault(x => x.UserId == id);
                userObj.Role = 2;
                _bookStoreDbContext.Users.Update(userObj);
                _bookStoreDbContext.SaveChanges();
            }
            catch(Exception e)
            {
                return  BadRequest(new { message = "New User can't be Added" });
            }
            return Ok();
        }



        [HttpDelete]
        public IActionResult RemoveOwner(long id)
        {
            var userObj = _bookStoreDbContext.Users.FirstOrDefault(x => x.UserId == id);

            if (userObj == null)
            {
                return BadRequest(new { message = "Not Found" });
            }
            else
            {
                userObj.Role = 1;
                _bookStoreDbContext.Users.Update(userObj);
                _bookStoreDbContext.SaveChanges();
                return Ok(new { message = "Removed as a Owner" });

            }
        }




        [HttpGet]
        // [Authorize]
        public async Task<Object> GetOwners()
        {
            //Change it according to enum
            List<Users> temp = _bookStoreDbContext.Users.Where(x=>x.Role == 0).ToList();
            if (temp == null)
                return BadRequest(new { message = "No Co-owner Found" });
            return Ok(temp);

        }



    }
}
