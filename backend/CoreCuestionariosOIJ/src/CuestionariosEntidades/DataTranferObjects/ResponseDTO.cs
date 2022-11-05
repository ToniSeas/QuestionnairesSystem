namespace CuestionariosEntidades.DataTranferObjects
{
    // <T> indica un objeto generico (cualquier objeto)
    public class ResponseDTO<T> : MessageDTO
    {
        public T? Item { get; set; }
    }
}
