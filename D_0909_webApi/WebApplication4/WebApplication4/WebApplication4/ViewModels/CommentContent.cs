using Microsoft.EntityFrameworkCore;
using WebApplication4.Models;
namespace WebApplication4.ViewModels
{
    public partial class CommentContent : DbContext
    {
        //public string ShortCommentContent
        //{
        //    get
        //    {
        //        int maxLength = 100; // 設定要顯示的字數
        //        return CommentContent.Length > maxLength ? CommentContent.Substring(0, maxLength) + "" : CommentContent;
        //    }
        //}
    }
}
