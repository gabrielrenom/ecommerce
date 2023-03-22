using Microsoft.AspNetCore.Mvc;

namespace SoNice.Controllers
{
    public class ProductsController:ControllerBase
    {
        public ProductsController()
        {

        }

        public async Task<IActionResult> GetProductsFrontPage()
        {
            return Ok();
        }
    }
}
