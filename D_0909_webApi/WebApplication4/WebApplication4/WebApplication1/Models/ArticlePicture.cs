using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class ArticlePicture
{
    public int ArticlePicturesId { get; set; }

    public int? ArticleId { get; set; }

    public byte[]? ArticlePictures { get; set; }

    public string? ArticlePicturesString { get; set; }

    public virtual ArticleOverview? Article { get; set; }
}
