using KnockOutTry.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnockOutTry.Controllers
{
    public class UsersController : Controller
    {
        // GET: Users
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetUsers()
        {
            List<User> users = new List<User>();

            for (int i = 0; i < 10; i++)
            {
                User newUser = new Models.User() { Id = i, Name = "UserName" + i, LastName = "UserLast" + i };
                users.Add(newUser);
            }
            return Json(users, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetUser()
        {
            User user = new Models.User() { Id = 1, Name = "Martin", LastName = "Aybar" };
            return Json(user, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public ActionResult GetModel()
        {
            return Json(new Modelo(), JsonRequestBehavior.AllowGet);
        }
    }

    public class Modelo
    {
        public string Name { get; set; } = "ValorDelModelo";

        public int[] Nros { get; set; } = new[] { 1, 2, 3, 4, 5, 6 };

        public int selectedNro { get; set; }
    }


}