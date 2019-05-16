using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using gymwebapp.Models;
using gym.Ado.DBRepository;

namespace gymwebapp.Controllers
{
    public class HomeController : Controller
    {
        IDBConfiguration _config;
        public HomeController(IDBConfiguration config)
        {
            _config = config;

        }
        public IActionResult Index()
        {
            //_dbConfig = new DBConfigurtaion();
            var connectionstrings = _config.ConnectionString;
            Console.WriteLine(connectionstrings);


            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
