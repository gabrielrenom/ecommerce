using Microsoft.AspNetCore.Mvc;
using SoNice.Domain.Services;

namespace SoNice.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductShopController:ControllerBase
    {
        private readonly IProductsService _productsService;

        public ProductShopController(IProductsService productsService)
        {
            _productsService= productsService;
        }

        [HttpGet]
        public async Task<IActionResult> GetProductsFrontPage()
        {
            var result = await _productsService.GetAllProducts(isnew:true);

            return Ok(result);
        }
    }
}
