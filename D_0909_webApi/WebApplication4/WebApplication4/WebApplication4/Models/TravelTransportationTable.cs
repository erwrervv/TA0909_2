using System;
using System.Collections.Generic;

namespace WebApplication4.Models;

public partial class TravelTransportationTable
{
    public bool TransportationId { get; set; }

    public string? TransportMode { get; set; }

    public DateOnly? DepartureDate { get; set; }

    public DateOnly? ArrivalDate { get; set; }
}
