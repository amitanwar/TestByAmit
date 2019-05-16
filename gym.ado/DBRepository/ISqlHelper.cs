using System;
using System.Data;
using Microsoft.Data.SqlClient;

namespace gym.Ado.DBRepository
{
    public interface ISqlHelper
    {
        SqlDataReader ExecuteReader(string connectionString, string commandText);
        SqlDataReader ExecuteReader(string connectionString, string commandText, params SqlParameter[] commandParameters);

    }
}