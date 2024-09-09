using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class LevelTable
{
    public int LevelId { get; set; }

    public string? LevelName { get; set; }

    public double? Discount { get; set; }

    public virtual ICollection<BasicMemberInformation> BasicMemberInformations { get; set; } = new List<BasicMemberInformation>();
}
