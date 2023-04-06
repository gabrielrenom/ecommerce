using Microsoft.AspNetCore.Mvc;
using SoNice.DAL.Entities;
using SoNice.Domain.Services;
using SoNice.ViewModels;
using System.Reflection.Metadata.Ecma335;

namespace SoNice.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductShopController : ControllerBase
    {
        private readonly IProductsService _productsService;

        public ProductShopController(IProductsService productsService)
        {
            _productsService = productsService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProductsFrontPage()
        {
            var result = await _productsService.GetAllProducts(isnew: true);

            return Ok(ConvertToProductViewModel(result));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {
            var result = await _productsService.GetProductById(id);

            return Ok(ConvertDetailedToProductViewModel(result));
        }

        private List<ProductViewModel> ConvertToProductViewModel(List<Product> products) { 
        
            return products.Select(p => new ProductViewModel
            {
                 Price= p.Price,
                  CategoryId= p.CategoryId,
                   CreatedAt= DateTime.Now,
                    Description= p.Description, 
                     Id= p.Id,
                      IsNew= p.IsNew,
                       Name = p.Name,
                        Rating= p.Rating,
                         Stock= p.Stock,
                          UpdatedAt = p.UpdatedAt
            }).ToList();
        }

        private ProductViewModel ConvertDetailedToProductViewModel(Product p)
        {
            return new ProductViewModel
            {
                Price = p.Price,
                CategoryId = p.CategoryId,
                CreatedAt = DateTime.Now,
                Description = p.Description,
                Id = p.Id,
                IsNew = p.IsNew,
                Name = p.Name,
                Rating = p.Rating,
                Stock = p.Stock,
                UpdatedAt = p.UpdatedAt,
                Category= p.Category.Name,
            };
        }

    }
}
