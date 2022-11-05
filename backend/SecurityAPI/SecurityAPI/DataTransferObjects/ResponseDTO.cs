namespace SecurityAPI.DataTransferObjects
{
    public class ResponseDTO<T> : MessageDTO
    {
        public T? Item { get; set; }
    }
}