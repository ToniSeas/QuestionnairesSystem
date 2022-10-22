namespace CuestionariosEntidades.DataTranferObjects
{
    // <T> indica un objeto generico (cualquier objeto)
    public class MessageDTO<T>
    {
        public int? Id { get; set; }
        public string? Message { get; set; }
        public T? Item { get; set; }
    }
}
