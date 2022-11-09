using Microsoft.AspNetCore.Mvc;

namespace dreams_API.Controllers
{
    [ApiController]
    [Route("/")]
    public class HomeController: ControllerBase
    {
        [HttpGet]
        public ActionResult Inicio()
        {
            return new ContentResult
            {
                ContentType = "text/html",
                Content = "<h1> API Dreams Come True: Funcionou!!!</h1>"
            };
        }
/*
        [HttpGet("syncsale")]
        public IEnumerable<Product> GetOnSaleProducts()
        {
            var products = _repository.GetProducts();

            foreach (var product in products)
            {
                if(product.IsOnSale)
                {
                    yield return product;
                }
            }
        }*/
    }
}