using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using gym.model.AuthClass;
using gym.Ado.DBRepository;
using Microsoft.Data.SqlClient;

namespace gymwebapp.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthenicationApiController : ControllerBase
    {

        IDBConfiguration _config;
        ISqlHelper _objConn;
        public AuthenicationApiController(IDBConfiguration config, ISqlHelper objConn)
        {
            _config = config;
            _objConn = objConn;


        }
        [HttpPost]
        public List<AuthModel> Authenication([FormBody] AuthModel _Dbmodel)
        {
            List<AuthModel> _lst = new List<AuthModel>();
            List<SqlParameter> commandParamList = new List<SqlParameter>();
            commandParamList.Add(new SqlParameter("@GUserId", _Dbmodel.Loginid));
            commandParamList.Add(new SqlParameter("@GPassowrd", _Dbmodel.Password));
            using (SqlDataReader reader = _objConn.ExecuteReader(_config.ConnectionString, "LoginAuth", commandParamList.ToArray()))
            {

                while (reader.Read())
                {
                    AuthModel _authmodel = new AuthModel();
                    _authmodel.Loginid = reader.GetString(reader.GetOrdinal("GUserId"));
                    _authmodel.Password = reader.GetString(reader.GetOrdinal("GPassowrd"));
                    _authmodel.Status = reader.GetInt32(reader.GetOrdinal("GStatus"));
                    _lst.Add(_authmodel);
                }

            }
            return _lst;
        }

    }
}