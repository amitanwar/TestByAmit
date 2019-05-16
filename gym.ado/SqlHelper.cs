using System;
using System.Data;
using Microsoft.Data.SqlClient;
using gym.Ado.DBRepository;

namespace gym.Ado
{
    public class SqlHelper : ISqlHelper
    {
      
        public SqlDataReader ExecuteReader(string connectionString, string commandText)
        {
                  return ExecuteReader(connectionString, commandText, (SqlParameter[])null);
        }


        public SqlDataReader ExecuteReader(string connectionString, string commandText, params SqlParameter[] commandParameters)
        {
            //create & open a SqlConnection
            SqlConnection cn = new SqlConnection(connectionString);
            cn.Open();

            try
            {
                //call the private overload that takes an internally owned connection in place of the connection string
                return ExecuteReader(cn, null, commandText, commandParameters, false);
            }
            catch
            {
                //if we fail to return the SqlDatReader, we need to close the connection ourselves
                cn.Close();
                throw;
            }
        }

     /*    public  SqlDataReader ExecuteReader(SqlConnection connection, string commandText, params SqlParameter[] commandParameters)
        {
            try
            {
                return ExecuteReader(connection, null, commandText, commandParameters, true);
            }
            catch
            {
                throw;
            }
        }
 */
        private  SqlDataReader ExecuteReader(SqlConnection connection, SqlTransaction transaction, string commandText, SqlParameter[] commandParameters, bool ExternalConn)
        {
            //create a command and prepare it for execution
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.Transaction = transaction;
            cmd.CommandText = commandText;
            cmd.CommandType = CommandType.Text;

            if (commandParameters != null)
                foreach (SqlParameter p in commandParameters)
                    cmd.Parameters.Add(p);

            //create a reader
            SqlDataReader dr;

            // call ExecuteReader with the appropriate CommandBehavior
            if (ExternalConn)
            {
                dr = cmd.ExecuteReader();
            }
            else
            {
                dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            }

            // detach the SqlParameters from the command object, so they can be used again.
            cmd.Parameters.Clear();

            return dr;
        }

    }
}