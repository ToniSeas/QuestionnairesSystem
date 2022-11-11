using CuestionariosAD.Context;
using CuestionariosEntidades.DataTranferObjects;
using CuestionariosEntidades.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CuestionariosAD.DataAccess
{
    public class AnswerAD
    {

        private readonly DataContext _context;

        public AnswerAD()
        {
            _context = new DataContext();
        }

    }
}
