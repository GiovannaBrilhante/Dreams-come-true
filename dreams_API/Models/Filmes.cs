using System.ComponentModel.DataAnnotations;
namespace dreams_API.Models
{
    public class Filmes
    {
        [Key]
        public int idFilme { get; set; }

        [Required(ErrorMessage = "O campo name é obrigatório", AllowEmptyStrings = false)]
        [StringLength(100), MinLength(2)]
        public string? name { get; set; } = string.Empty;

        [Required(ErrorMessage = "O campo avaliacao é obrigatório", AllowEmptyStrings = false)]
        [StringLength(3), MinLength(2)]
        public string? avaliacao { get; set; } = string.Empty;

        [Required(ErrorMessage = "O campo ano é obrigatório")]
        public int? ano { get; set; }

        [Required(ErrorMessage = "O campo categoria é obrigatório", AllowEmptyStrings = false)]
        [StringLength(25), MinLength(2)]
        public string? categoria { get; set; } = string.Empty;
    }
}