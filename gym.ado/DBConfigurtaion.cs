using System;
using System.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Binder;
using Microsoft.Extensions.Configuration.EnvironmentVariables;
using Microsoft.Extensions.Configuration.FileExtensions;
using Microsoft.Extensions.Configuration.Json;
using Microsoft.Data.SqlClient;
using gym.Ado.DBRepository;
using System.IO;

namespace gym.Ado
{
    public class DBConfigurtaion : IDBConfiguration
    {

        public string ConnectionString
        {
            get { return GetConnectionString(); }

        }

        public string GetConnectionString()
        {
            var builder = new ConfigurationBuilder()
       .SetBasePath(Directory.GetCurrentDirectory() + "/gym.ado/")
       .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
       .AddEnvironmentVariables();

            IConfiguration configuration = builder.Build();

            Console.WriteLine("Connection string: " + configuration.GetConnectionString("DefaultConnection"));
            var _Connectionstring = configuration.GetConnectionString("DefaultConnection");
            return _Connectionstring;
        }

    }


}