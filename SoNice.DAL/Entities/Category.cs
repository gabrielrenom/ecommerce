namespace SoNice.DAL.Entities
{
    public class Category:BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public int ParentId { get; set; }
        public Category Parent { get; set; }
        public List<Category> Children { get; set; }
    }
}