﻿using System;
using System.Collections.Generic;

namespace WebApplication1.Models;

public partial class TravelareaTable
{
    public int TravelareaId { get; set; }

    public string? TravelareaName { get; set; }

    public virtual ICollection<ProductTravel> ProductTravels { get; set; } = new List<ProductTravel>();
}
