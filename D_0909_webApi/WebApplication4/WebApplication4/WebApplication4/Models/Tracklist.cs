using System;
using System.Collections.Generic;

namespace WebApplication4.Models;

public partial class Tracklist
{
    public int TracklistId { get; set; }

    public int? MemberuniqueId { get; set; }

    public int? TrackMemberId { get; set; }

    public virtual BasicMemberInformation? Memberunique { get; set; }
}
