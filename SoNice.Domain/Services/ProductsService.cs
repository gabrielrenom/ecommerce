using Microsoft.EntityFrameworkCore;
using SoNice.DAL.Entities;
using SoNice.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoNice.Domain.Services
{
    public class ProductsService : IProductsService
    {
        private readonly SoNiceDbContext _context;

        public ProductsService(SoNiceDbContext context ) 
        {
            _context = context;
        }
        public async Task<List<Product>> GetAllProducts(bool isnew=false)
        {
            try
            {
                var products = await _context.Products.Include(x => x.Category).Where(x => x.IsNew == true).ToListAsync();
                return products;
            }
            catch (Exception ex)
            {
                return null;
                throw;
            }
            
            
        }
    }
}
