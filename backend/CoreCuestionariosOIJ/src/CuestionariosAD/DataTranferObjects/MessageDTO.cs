using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuestionariosAD.DataTranferObjects
{
    // <T> indica un objeto generico (cualquier objeto)
    public class MessageDTO<T>
    {
        public int? Id { get; set; }
        public string? Message { get; set; }
        public T? Item { get; set; }
    }
}
